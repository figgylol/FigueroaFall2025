let games = [];
let sounds = [];
let currentGame = 0;
let currentImage = 0;
let lastSwitch = 0;
let alpha = 0;

function preload() {
  
  games[0] = [loadImage('images/SOTCFANART1.png'),loadImage('images/SOTCFANART2.png'),loadImage('images/SOTCFANART3.png')];

  games[1] = [loadImage('images/RE4CA1.png'),loadImage('images/RE4CA2.png'),loadImage('images/RE4CA3.png')];

  games[2] = [loadImage('images/TLOU2CA1.png'),loadImage('images/TLOU2CA2.png'),loadImage('images/TLOU2CA3.png')];

  sounds[0] = loadSound('sounds/SOTC_Commandment.mp3');

  sounds[1] = loadSound('sounds/RE4_Serenity.mp3');

  sounds[2] = loadSound('sounds/TLOU2_Song.mp3');
}

function setup() {createCanvas(windowWidth, windowHeight);sounds[currentGame].play();sounds[currentGame].setVolume(0);}

function draw() {background(0);tint(255, alpha);image(games[currentGame][currentImage], 0, 0, width, height);if (alpha < 255) alpha += 5;if (millis() - lastSwitch > 3500) {currentImage++;alpha = 0;lastSwitch = millis();

 if (currentImage >= games[currentGame].length) {currentImage = 0;sounds[currentGame].stop();currentGame = (currentGame + 1) % games.length;sounds[currentGame].play();sounds[currentGame].setVolume(0);}
  }

let vol = constrain(sounds[currentGame].getVolume() + 0.01, 0, 1);sounds[currentGame].setVolume(vol);
}

function windowResized() {resizeCanvas(windowWidth, windowHeight);}