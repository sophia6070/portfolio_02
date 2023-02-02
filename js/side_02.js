$(function () {
  $('.btn').click(function () {
    $('.side').toggleClass('active')

    if ($('.side').hasClass('active')) {
      //
      //   $(this).find('i').css('transform', 'rotate(180deg)')
      $(this).find('img').attr('src', '../../images/close.png')
    } else {
      //
      //   $(this).find('i').css('transform', 'rotate(0)')
      $(this).find('img').attr('src', '../../images/open.png')
    }
  })
})
