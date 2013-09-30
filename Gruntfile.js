//noinspection JSUnresolvedVariable
module.exports = function ( grunt ){

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: {
      editor: {
        src: ["publish/*", "publish/**/*"]
      }
    },
    concat: {
      editor: {
        options: {
//          separator: ";\n"
        },
        files: {
          "publish/editor/frameworks.js": [
            "source/static/js/roles/roles.js",
            "source/static/js/templates/templates.js",
            "source/static/js/localsys/localsys.js",
            "source/static/js/jojo.js"
          ],
          "publish/editor/monogatari.js": [
            "source/editor/core/monogatari.js"
          ],
          "publish/editor/api.js": [
            "source/editor/api/Monogatari.js",
            "source/editor/api/assets.js",
            "source/editor/api/flags.js",
            "source/editor/api/story.js",
            "source/editor/api/LayerManager.js",
            "source/editor/api/Frame.js",
            "source/editor/api/displayables.js",
            "source/editor/api/Stage.js",
            "source/editor/api/Game.js"
          ],
          "publish/editor/core.js": [
            "source/editor/core/editor.js",
            "source/editor/core/hud.js",
            "source/editor/core/controls.js",
            "source/editor/core/roles.js",
            "source/editor/core/templates.js"
          ],
          "publish/editor/hud.js": [
            "source/editor/hud/header.js",
            "source/editor/hud/toolbar.js",
            "source/editor/hud/menubar.js",
            "source/editor/hud/**/*.js"
          ],
          "publish/editor/test.js": [
            "source/editor/core/templates.js",
            "source/editor/test/test.js"
          ],
          "publish/play/play.js": [
            "source/editor/core/templates.js",
            "source/play/play.js"
          ]
        }
      },
      editorIndex: {
        options: {
          process: function( src ){
            return src
              .replace(/[\n\r]*<script[^>]*?><\/script>[\n\r]*/gi, "")
              .replace(
                "</body>",
                '\n' +
                  '<script src="/editor/frameworks.js"></script>\n' +
                  '<script src="/editor/monogatari.js"></script>\n' +
                  '<script src="/editor/api.js"></script>\n' +
                  '<script src="/editor/core.js"></script>\n' +
                  '<script src="/editor/hud.js"></script>\n' +
                  '</body>'
              )
          }
        },
        src: "source/editor/index.html",
        dest: "publish/editor/index.html"
      },
      testIndex: {
        options: {
          process: function( src ){
            return src
              .replace(/[\n\r]*<script[^>]*?><\/script>[\n\r]*/gi, "")
              .replace(
                "</body>",
                '\n' +
                  '<script src="/editor/frameworks.js"></script>\n' +
                  '<script src="/editor/monogatari.js"></script>\n' +
                  '<script src="/editor/api.js"></script>\n' +
                  '<script src="/editor/test.js"></script>\n' +
                  '</body>'
              )
          }
        },
        src: "source/editor/test/index.html",
        dest: "publish/editor/test/index.html"
      },
      playIndex: {
        options: {
          process: function( src ){
            return src
              .replace(/[\n\r]*<script[^>]*?><\/script>[\n\r]*/gi, "")
              .replace(
                "</body>",
                '\n' +
                  '<script src="/editor/frameworks.js"></script>\n' +
                  '<script src="/editor/monogatari.js"></script>\n' +
                  '<script src="/editor/api.js"></script>\n' +
                  '<script src="/play/play.js"></script>\n' +
                  '</body>'
              )
          }
        },
        src: "source/play/index.html",
        dest: "publish/play/index.html"
      }
    },
    uglify: {
      options: {
        mangle: {
          except: "monogatari"
        },
        compress: true,
        report: "min"
      },
      editor: {
        expand: true,
        cwd: 'publish/editor/',
        src: ['*.js'],
        dest: 'publish/editor/',
        ext: '.js'
      }
    },
    copy: {
      editor: {

        files: [
          {
            src: ["source/editor/templates/*.html"],
            dest: "publish/editor/templates/",
            expand: true,
            flatten: true
          },
          {
            src: ["source/static/styles/editor.css"],
            dest: "publish/static/styles/editor.css"
          },
          {
            src: ["source/static/styles/game.css"],
            dest: "publish/static/styles/game.css"
          },
          {
            src: ["source/projects/"],
            dest: "publish/",
            expand: true,
            flatten: true
          }
        ]
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-clean")
  grunt.loadNpmTasks("grunt-contrib-concat")
  grunt.loadNpmTasks("grunt-contrib-uglify")
  grunt.loadNpmTasks("grunt-contrib-copy")

  grunt.registerTask("build", ["clean", "concat", "copy"])
  grunt.registerTask("publish", ["clean", "concat", "uglify", "copy"])

}