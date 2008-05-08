// You do not need to change the following path if you installed WordPress into the root directory.
var lightbox_path = 'http://'+location.hostname+'/wp-content/plugins/lightbox-gallery/';

jQuery(document).ready(function () {
  var i = 0;
  showImg(i);
  jQuery('[@rel*=lightbox]').lightBox();
  jQuery('.gallery a').lightBox({captionPosition:'gallery'});
  jQuery('.gallery a').Tooltip({track:true, delay:0, showURL: false});
});

function showImg(i){
  if(i == jQuery('img').length){
    return;
  }else{
    jQuery(jQuery('img')[i]).animate({opacity:'show'},"normal",function(){i++;showImg(i)});
  }
}