$('#h').click(function () {
  var offset = $('.Home').offset()
  $('html').animate({ scrollTop: offset.top }, 700)
})
$('#a').click(function () {
  var offset = $('.About').offset()
  $('html').animate({ scrollTop: offset.top }, 700)
})
$('#m').click(function () {
  var offset = $('.Member').offset()
  $('html').animate({ scrollTop: offset.top }, 700)
})
$('#b').click(function () {
  var offset = $('.Bylaw').offset()
  $('html').animate({ scrollTop: offset.top }, 700)
})
