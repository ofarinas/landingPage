$("#menu-toggle").click(function (e) {
  console.log('hallo');
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
  $("#service").toggleClass("toggled");
});

$("#service").click(function (e) {
  console.log('hallo');
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
$("#index").click(function (e) {
  console.log('hallo');
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
