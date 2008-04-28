=== Lightbox Gallery ===
Contributors: Hiroaki Miyashita
Donate link: http://wordpressgogo.com/development/lightbox-gallery.html
Tags: lightbox, gallery, image, images, album, photo
Requires at least: 2.5
Tested up to: 2.5.1
Stable tag: 0.1

This plugin changes the view of galleries to the lightbox.

== Description ==

The Lightbox Gallery plugin changes the view of galleries to the lightbox.

* Lightbox display 
* Tooltip view of caption of images 
* Displays the associated metadata with images 

== Installation ==

1. Edit the `lightbox-gallery.js` and change the path of line 2 according to your settings.
2. Copy the `lightbox-gallery` directory into your `wp-content/plugins` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. That's it! :)

== Known Issues / Bugs ==

== Frequently Asked Questions ==

== How to use ==
How to use this plugin is basically the same as the way to add [gallery] which has been adopted 
by over WordPress 2.5. Lightbox Gallery plugin automatically converted the default view of gallery 
into the lightbox view. Photo captions are displayed as tooltips. Photo descriptions are displayed 
when the lightbox pops up.

== Advanced settings ==
There are two additional options to extend the shorttag [gallery].

lightboxsize
The image size when the lightbox pops up. The default is medium, but you can change to full. 
[gallery lightboxsize="full"] 

meta
Defines whether the exif information is displayed. The default is false.
If you want to show the photo info, set true. The exif shown on the lightbox includes camera body, 
aperture, focal length, shutter speed, and created timestamp.
[gallery meta="true"] 

== Uninstall ==

1. Deactivate the plugin
2. That's it! :)
