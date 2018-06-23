$("#menu-toggle").click(function(e) {
  console.log('hallo');
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
