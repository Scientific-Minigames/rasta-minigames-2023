let rastaLogo;
let kamvaLogo;

const bgNum = 1; //choose from {1,2,3,4}
let bgImage;

const gameFont = 'bkamran' //change if needed.

function preload() {
  // loading background and logos
  bgImage = loadImage(`../assets/backgrounds/4x3/0${1}.jpg`);
  kamvaLogo = loadImage(`../assets/logos/kamva.png`);
  rastaLogo = loadImage(`../assets/logos/rasta.png`);
}

function setup() {
  createCanvas(windowWidth, windowWidth * 0.75); // aspect ratio 4x3 works better in kamva
  textFont('bkamran'); // default font for our minigames
}

function draw() {
  showBackground();
  showLogos(width * 0.01, height * 0.8, height * 0.19);
  showDescription(width * 0.95, height * 0.75, 'قالب بازی‌ها', 'سیدعلی حسینی');
}

// showing background. change transparency if needed.
function showBackground() {
  let transparency = 200;
  background(255);
  tint(255, transparency);
  image(bgImage, 0, 0, width, height);
  noTint();
}

// showing logos. x, y are coordinates of the top left of logos 
function showLogos(x, y, logoSize) {
  translate(x, y);
  image(rastaLogo, 0, 0, logoSize, logoSize);
  image(kamvaLogo, logoSize, 0, logoSize, logoSize);
  translate(-x, -y);
}

function showDescription(x, y, gameName, developerName) {
  textAlign(RIGHT);
  textFont(gameFont);
  h = 0;
  translate(x, y);
  // line(0, 0, 0, 100); uncomment this line for adjusting :))
  
  let nameSize = height * 0.07;
  h += nameSize;
  textSize(nameSize);
  text(gameName, 0 - nameSize * 0.25, h);

  let schoolSize = height * 0.07;
  h += schoolSize * 1.1;
  textSize(schoolSize);
  text('مدرسه تاسبتانه رستا ۱۴۰۲', 0 + schoolSize, h);

  let devSize = height * 0.05;
  h += devSize * 1.1;
  textSize(devSize);
  text(`نام طراح: ${developerName}`, 0, h);

  translate(-x, -y);
}