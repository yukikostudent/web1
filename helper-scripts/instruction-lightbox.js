$(document).ready(function() {
  $('.lightbox').magnificPopup({
    type:'image',
    gallery: {enabled:true},
    titleSrc: function(item) {
      return item.el.attr('title');
    }
  });
});