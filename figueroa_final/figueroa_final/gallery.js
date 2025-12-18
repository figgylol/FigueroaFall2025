
var imageWidth = 640; 

var sotcRow = document.getElementsByClassName("sotc-row")[0];
var sotcTrack = sotcRow.getElementsByClassName("track")[0];
var sotcImages = sotcTrack.getElementsByTagName("img");
var sotcIndex = 0;
function updateSotc() {sotcTrack.style.left = -(sotcIndex * imageWidth) + "px";}
sotcRow.getElementsByClassName("next")[0].onclick = function() {sotcIndex = (sotcIndex + 1) % sotcImages.length;updateSotc();}; sotcRow.getElementsByClassName("prev")[0].onclick = function() {sotcIndex = (sotcIndex - 1 + sotcImages.length) % sotcImages.length;updateSotc();};

var re4Row = document.getElementsByClassName("re4-row")[0];
var re4Track = re4Row.getElementsByClassName("track")[0];
var re4Images = re4Track.getElementsByTagName("img");
var re4Index = 0;
function updateRe4() {re4Track.style.left = -(re4Index * imageWidth) + "px";}
re4Row.getElementsByClassName("next")[0].onclick = function() {re4Index = (re4Index + 1) % re4Images.length;updateRe4();}; re4Row.getElementsByClassName("prev")[0].onclick = function() {re4Index = (re4Index - 1 + re4Images.length) % re4Images.length;updateRe4();};

var tlouRow = document.getElementsByClassName("tlou2-row")[0];
var tlouTrack = tlouRow.getElementsByClassName("track")[0];
var tlouImages = tlouTrack.getElementsByTagName("img");
var tlouIndex = 0;
function updateTLOU() {tlouTrack.style.left = -(tlouIndex * imageWidth) + "px";}
tlouRow.getElementsByClassName("next")[0].onclick = function() {tlouIndex = (tlouIndex + 1) % tlouImages.length;updateTLOU();}; tlouRow.getElementsByClassName("prev")[0].onclick = function() {tlouIndex = (tlouIndex - 1 + tlouImages.length) % tlouImages.length;updateTLOU();};

