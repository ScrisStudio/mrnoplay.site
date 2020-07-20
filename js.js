/*var display456 = false;
setInterval(display456change, 5000);*/

function universal() {
  var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel"); 
  if (isMac) mac();
  else win();
}

function mac() {
  _czc.push(["_trackEvent", "下载", "下载", "mac", "1", "mac"]);
  window.open("https://github.com/scris/mrnoplay/releases/", "_blank");
}

function win() {
  _czc.push(["_trackEvent", "下载", "下载", "win", "1", "win"]);
  window.open("https://github.com/scris/mrnoplay/releases/", "_blank");
}

function softpedia() {
  _czc.push(["_trackEvent", "下载", "下载", "win", "1", "win"]);
  window.open("https://www.softpedia.com/get/Gaming-Related/Mr-Noplay.shtml", "_blank");
}

function web() {
  _czc.push(["_trackEvent", "下载", "在线", "web", "1", "web"]);
  window.open("https://webmrnoplay.scris.top/", "_blank");
}

function lanzou() {
  _czc.push(["_trackEvent", "下载", "下载", "lanzou", "1", "lanzou"]);
  window.open("https://www.lanzous.com/b01n0vl3a", "_blank");
}

function cn() {
  localStorage.setItem('lang', 'cn');
  location.href = "index.html";
}

function en() {
  localStorage.setItem('lang', 'en');
  location.href = "en.html";
}

function mysite() {
  window.open("https://ds.scris.top", "_blank");
}

function mygithub() {
  window.open("https://github.com/scris/", "_blank");
}

function more_cn() {
  location.href = "more.html";
}

function more_en() {
  location.href = "more-en.html";
}

/*var _1 = document.getElementsByClassName('1')[0];
var _2 = document.getElementsByClassName('2')[0];
var _3 = document.getElementsByClassName('3')[0];
var _4 = document.getElementsByClassName('4')[0];
var _5 = document.getElementsByClassName('5')[0];
var _6 = document.getElementsByClassName('6')[0];
_4.style.display = 'none';
_5.style.display = 'none';
_6.style.display = 'none';
_1.style.display = 'block';
_2.style.display = 'block';
_3.style.display = 'block';

function display456change() {
  display456 = !display456;
  if (display456) {
    _1.style.display = 'none';
    _2.style.display = 'none';
    _3.style.display = 'none';
    _4.style.display = 'block';
    _5.style.display = 'block';
    _6.style.display = 'block';
  } else {
    _4.style.display = 'none';
    _5.style.display = 'none';
    _6.style.display = 'none';
    _1.style.display = 'block';
    _2.style.display = 'block';
    _3.style.display = 'block';
  }
}*/