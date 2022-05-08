$(function () {
  $('.slider__container').slick({
    infinite: true,
    // dots: true,
    buttons: false,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000
  });


  //   $('.dialog_item').each(function() {
  // 	var item_id = $(this).attr('id');
  // });

  // $('.btn').click(function() {
  // 	var btn_id = $(this).attr('id');
  // 	console.log(btn_id);
  // 	item_name = '.dialog_item#' + btn_id;
  // 	console.log(item_name);
  // 	$(item_name).css('display', 'block');
  // });

  // $('#0').click(function () {
  //   $('.dialog_item').css('display' ,'block');
  // });
  // $('.dialog_item__close_image').click(function () {
  //   $('.dialog_item').css('display' ,'none');
  // });

  });