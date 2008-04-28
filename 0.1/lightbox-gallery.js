// Change to your domain name
var lightbox_path = 'http://domainname/wp-content/plugins/lightbox-gallery/';

jQuery(document).ready(function () {
  var i = 0;
  showImg(i);
  jQuery('.gallery a').lightBox();
  jQuery('.gallery a').Tooltip({track:true, delay:0, showURL: false});
});

function showImg(i){
  if(i == jQuery('img').length){
    return;
  }else{
    jQuery(jQuery('img')[i]).animate({opacity:'show'},"normal",function(){i++;showImg(i)});
  }
}