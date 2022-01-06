var ash = window.screen.availHeight;
var asw = window.screen.availWidth;

var svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ' + String(asw) + ' ' + String(ash) + '"><defs><style>.cls-1{fill:none;}.cls-2{fill:#9edbfd;}.cls-3{fill:#d9f6fe;}.cls-4{fill:url(#新規パターン_8);}</style><pattern id="新規パターン_8" data-name="新規パターン 8" width="75.33" height="47.33" patternUnits="userSpaceOnUse" viewBox="0 0 75.33 47.33"><rect class="cls-1" width="75.33" height="47.33"/><circle class="cls-2" cy="-47.33" r="50"/><circle class="cls-2" cx="75.33" cy="-47.33" r="50"/><circle class="cls-2" cx="-37.67" cy="-23.67" r="50"/><circle class="cls-3" cx="-37.67" cy="-23.67" r="40"/><circle class="cls-2" cx="37.67" cy="-23.67" r="50"/><circle class="cls-3" cx="37.67" cy="-23.67" r="40"/><circle class="cls-2" cx="37.67" cy="-23.67" r="30"/><circle class="cls-2" cx="113" cy="-23.67" r="50"/><circle class="cls-3" cx="113" cy="-23.67" r="40"/><circle class="cls-2" r="50"/><circle class="cls-3" r="40"/><circle class="cls-2" r="30"/><circle class="cls-3" r="20"/><circle class="cls-2" cx="75.33" r="50"/><circle class="cls-3" cx="75.33" r="40"/><circle class="cls-2" cx="75.33" r="30"/><circle class="cls-3" cx="75.33" r="20"/><circle class="cls-2" cx="-37.67" cy="23.67" r="50"/><circle class="cls-3" cx="-37.67" cy="23.67" r="40"/><circle class="cls-2" cx="37.67" cy="23.67" r="50"/><circle class="cls-3" cx="37.67" cy="23.67" r="40"/><circle class="cls-2" cx="37.67" cy="23.67" r="30"/><circle class="cls-3" cx="37.67" cy="23.67" r="20"/><circle class="cls-2" cx="113" cy="23.67" r="50"/><circle class="cls-3" cx="113" cy="23.67" r="40"/><circle class="cls-2" cy="47.33" r="50"/><circle class="cls-3" cy="47.33" r="40"/><circle class="cls-2" cy="47.33" r="30"/><circle class="cls-3" cy="47.33" r="20"/><circle class="cls-2" cx="75.33" cy="47.33" r="50"/><circle class="cls-3" cx="75.33" cy="47.33" r="40"/><circle class="cls-2" cx="75.33" cy="47.33" r="30"/><circle class="cls-3" cx="75.33" cy="47.33" r="20"/><circle class="cls-2" cx="-37.67" cy="71" r="50"/><circle class="cls-3" cx="-37.67" cy="71" r="40"/><circle class="cls-2" cx="37.67" cy="71" r="50"/><circle class="cls-3" cx="37.67" cy="71" r="40"/><circle class="cls-2" cx="37.67" cy="71" r="30"/><circle class="cls-2" cx="113" cy="71" r="50"/><circle class="cls-3" cx="113" cy="71" r="40"/><circle class="cls-2" cy="94.67" r="50"/><circle class="cls-2" cx="75.33" cy="94.67" r="50"/></pattern></defs><g id="レイヤー_2" data-name="レイヤー 2"><g id="レイヤー_1-2" data-name="レイヤー 1">';

var svg2 = '<rect class="cls-4" width="' + String(asw) + '" height="' + String(ash) + '"/></g></g></svg>';

var svg_all = svg + svg2


function toBase64Url(url, callback) {
  var xhr = new XMLHttpRequest();
  console.log(xhr)

  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}


toBase64Url(svg_all, function (base64Url) {
  console.log('base64Url : ', base64Url);
});










var back1_view = "0 0" + " " + String(asw) + " " + String(ash);

document.getElementById("back1_svg").setAttribute("viewBox", back1_view);

//$('body').css('background-image', svg3);


anime({
  targets: '.img1',
  opacity: [0, 1],
  duration: 2500,
  delay: 1000
});

anime({
  targets: '.back1',
  duration: 2500,
  delay: 3000,
  translateX: asw
});