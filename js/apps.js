$(function(){
   $('.banner-slider').slick({
    prevArrow:'<i class="fas fa-angle-right "></i>',
    nextArrow:'<i class="fas fa-angle-left"></i>',
    autoplay:true,
   });
  $('.product_container').filterizr();
  $('.latest_product_item').slick({
    slidesToShow: 3,
    autoplay:true,
    prevArrow:'<i class="fas fa-angle-right "></i>',
    nextArrow:'<i class="fas fa-angle-left"></i>',
  });
  $('.testimonial_sec_slider').slick({
    slidesToShow: 2,
    autoplay:true,
    prevArrow:'<i class="fas fa-angle-right "></i>',
    nextArrow:'<i class="fas fa-angle-left"></i>',
  });
  
})