SISTEM
======

provides utilities for file related tasks

contains wrappers for file readers, a more useful way of accessing localStorage,
a download initializer, a wrapper for the local filesystem api and various path related utilities

Modules
-------

## global modules

### .datURLtoBlob( dataURL, type )
### .imageDataToBlob( imageData )
### .resizeImage( sourceImage, maxWidth, maxHeight, done )
### .batch( taskArray, process, done, throttle )
### .isImage( pathOrFile )
### .isAudio( pathOrFile )
### .isVideo( pathOrFile )

## sistem.file

### .readAsText( file, done )
### .readAsArrayBuffer( file, done )
### .readAsBinaryString( file, done )
### .readAsDataURL( file, done )
### .readAsJSON( file, done )

## sistem.path

### .concat( path )
### .getDir( path )
### .getFileName( path )
### .getParentDir( path )
### .replaceDir( path, newPath )
### .renameFile( path, newName )
### .stripExtension( path )

## sistem.space

### .convert( bytes, toUnit, fromUnit )
### .dynamic( bytes, precision )

## sistem.local

coming soon

## sistem.remote

coming soon


