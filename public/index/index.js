var ash = window.screen.availHeight;
var asw = window.screen.availWidth;
var back1_view = "0 0" + " " + String(asw) + " " + String(ash);
document.getElementById("back1_svg").setAttribute("viewBox", back1_view);





anime({
  targets: '.img1',
  opacity: [1, 0],
  duration: 2500,
  delay: 1500
});

anime({
  targets: '.back1',
  duration: 2500,
  delay: 1500,
  translateX: asw
});
anime({
  targets: '.img2',
  duration: 3500,
  delay: 2000,
  opacity: [0, 1],
});
anime({
  targets: '.img3',
  duration: 3500,
  delay: 2000,
  opacity: [0, 1],
});
anime({
  targets: '.texts',
  duration: 3500,
  delay: 2000,
  opacity: [0, 1],
});
anime({
  targets: '.img4',
  duration: 3500,
  delay: 2000,
  opacity: [0, 1],
});