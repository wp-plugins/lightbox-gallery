=== Lightbox Gallery ===
Contributors: Hiroaki Miyashita
Donate link: http://wordpressgogo.com/development/lightbox-gallery.html
Tags: lightbox, gallery, image, images, album, photo, photos, picture, pictures
Requires at least: 2.5
Tested up to: 2.8 Beta 2
Stable tag: 0.4.3

This plugin changes the view of galleries to the lightbox.

== Description ==

The Lightbox Gallery plugin changes the view of galleries to the lightbox.

* Lightbox display of Gallery
* Tooltip view of caption of images 
* Displays the associated metadata with images
* Divides Gallery into several pages
* Extends the default Gallery options
* Additional settings are set in the option page

You can also make regular images appear in a lightbox. See Faq.

Localization

* Italian (it_IT) - [Gianni Diurno](http://gidibao.net/)
* Japanese (ja) - [Hiroaki Miyashita](http://wordpressgogo.com/)
* Russian (ru_RU) - [Fat Cow](http://www.fatcow.com/)

If you have translated into your language, please let me know.

== Installation ==

1. Edit the `lightbox-gallery.js` and check the path of line 2 according to your settings.
2. Copy the `lightbox-gallery` directory into your `wp-content/plugins` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. There may exist localized images in 'images' directory. Replace default images with them.
5. That's it! :)

Lightbox Gallery will load 'lightbox-gallery.css' and 'lightbox-gallery.js' from your theme's directory if they exist. 
If they don't exist, they will just load the default 'lightbox-gallery.css' and 'lightbox-gallery.js' that come with Lightbox Gallery. This will allow you to upgrade Lightbox Gallery without worrying about overwriting your lightbox gallery styles that you have created.

== Known Issues / Bugs ==

== Frequently Asked Questions ==
* How can I make regular images appear in a lightbox without [gallery] shortcode?

Just add rel="lightbox" into "a" tag. Here is a sample.

&lt;a href="image.jpg" rel="lightbox" title="this is a caption"&gt;<br />
&lt;img src="thumbnail.jpg" alt="" /&gt;<br />
&lt;/a&gt;

* How can I handle multiple galleries in one page as separate ones?

You need to do two steps. If you would like to handle galleries separately, 
add different class names into [gallery] and add codes as many as class names 
into `lightbox-gallery.js`.
 

1. Edit `lightbox-gallery.js` and add some codes. Look at the comment of the file.
2. Add a class into [gallery]. ex) [gallery class="gallery2"]

== Screenshots ==

1. Lightbox Gallery

== How to use ==
How to use this plugin is basically the same as the way to add [gallery] which has been adopted 
by over WordPress 2.5. Lightbox Gallery plugin automatically converted the default view of gallery 
into the lightbox view. Photo captions are displayed as tooltips. Photo descriptions are displayed 
when the lightbox pops up.

== Advanced settings ==
There are three additional options to extend the shorttag [gallery].

* lightboxsize

The image size when the lightbox pops up. The default is medium, but you can change to full.

[gallery lightboxsize="full"] 

* meta

Defines whether the exif information is displayed. The default is false.
If you want to show the photo info, set true. The exif shown on the lightbox includes camera body, 
aperture, focal length, shutter speed, and created timestamp.

[gallery meta="true"]

* class

Adds a class attribute of the gallery. The default is `gallery1`.

[gallery class="gallery2"]

* nofollow

Adds the attribute, rel="nofollow". The default is false.

[gallery nofollow="true"]

* from, num

Defines from which and how many photos are displayed.
If the number of photos is over that of `num`, the navigation will be shown.
You can use the navigation option almost same as the `wp_link_pages` function.

[gallery from="5" num="10"]

* pagenavi

If you would like not to show the navigation, set `0`. The default is `1`.

[gallery num="10" pagenavi="0"]

== Uninstall ==

1. Deactivate the plugin
2. That's it! :)
