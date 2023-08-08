
let aspectRatio = 9 / 16;
let bgImage;
let rastaLogo;
let kamvaLogo;

// image
let images;
let imgSize;
let imgArray;
let filteredImage;
let imageSrc;

// buttons
let buttons = [];

// convolutions
let convolutions = [ 
  //vertical edge
  [[-1, 0, 1],
  [-1, 0, 1],
  [-1, 0, 1]],
  // horizontal edge
  [[-1, -1, -1],
  [0, 0, 0],
  [1, 1, 1]],
  // blur
  [[1/9, 1/9, 1/9],
  [1/9, 1/9, 1/9],
  [1/9, 1/9, 1/9]],
  // sharpen
  [[0, -1, 0],
  [-1, 5, -1],
  [0, -1, 0]]
];
poolings = ['max', 'average', 'min'];
let filterCoordinates = [];
let currentFilter= 0;

function preload() {
    // loading background and logos
    bgImage = loadImage(`../assets/backgrounds/0${1}.jpg`);
    kamvaLogo = loadImage(`../assets/logos/kamva.png`);
    rastaLogo = loadImage(`../assets/logos/rasta.png`);
  images = [];
  for (let i = 0; i < 10; i++) {
    images.push([]);
    for (let j = 1; j <= 10; j++) {
      path = 'data/' + i + '/' + j + '.png';
      let img = loadImage(path);
      img.loadPixels();
      images[i].push(img);
    }
  }
}

function setup() {
  for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      images[i][j - 1].loadPixels();
    }
  }
  textFont('bkamran'); // default font for our minigames
  createCanvas(windowWidth, windowWidth * aspectRatio); // aspect ratio 4x3 works better in kamva
  // showBackground();
  imgSize = width * 0.2;
  imgOffset = width * 0.05;
  
  for (let i=0; i < 10; i++) {
    if (buttons.length != 10) {
      let button = createButton(i);
      button.mouseClicked(() => {
        getRandomPath(i);
        showPixeledImage(imgOffset, (height - imgSize) / 2, imgArray, imgSize / 28);
      })
      buttons.push(button);
    }
    buttons[i].position(imgOffset + i * imgSize / 10, (height + imgSize) / 2 + imgOffset / 3);
  }
  if (!imgArray) {
    getRandomPath(0);
  }
}

function draw() {
  showBackground();
  showLogos(width * 0.01, height * 0.82, height * 0.12);
  showDescription(width * 0.965, height * 0.8, 'قالب بازی‌ها', 'سیدعلی حسینی');
  showPixeledImage(imgOffset, (height - imgSize) / 2, imgArray, imgSize / 28);
  showFilters(width / 2 - width / 20, 0, height, width / 16);
  noLoop();
}


function getRandomPath(num) {
  let sample = int(Math.random() * 10 + 1);
  path = 'data/' + num + '/' + sample + '.png';
  // images[num][sample].loadPixels();
  imgArray = [];
  for (let i=0; i < 28; i++) {
    imgArray.push([]);
    for (let j=0; j < 28; j++) {
      imgArray[i].push(images[num][sample].pixels[(i * 28 + j) * 4]);
    }
  }
  console.log(path);
  return path;
}

function showFilter(filter, size, x, y) {
  translate(x, y);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(size/3.5);
  for (let i=0; i < filter.length; i++) { 
    for (let j=0; j < filter[0].length; j++) {
      // c = Math.floor(filter[j][i] * 255)
      // fill(color(c, c, c));
      stroke(0);
      fill(255);
      square(i * size / filter.length, j * size / filter.length, size / filter.length);
      // showing filter[i][j] with 2 decimal points, if its integer, it will be shown as integer
      fill(0);
      noStroke();
      text(filter[j][i].toFixed(2), (i + 0.5) * size / filter.length, (j + 0.5) * size / filter.length);
    }
  }
  translate(-x, -y);
}

function showPooling(pooling, size, x, y) {
  translate(x, y);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(size / 3);
  square(0, 0, size);
  fill(0);
  noStroke();
  text(pooling, size / 2, size / 2);
  translate(-x, -y);

}

function showFilters(x, y, ySize, kernelSize) {
  translate(x, y);
  let stepSize = (ySize - kernelSize * (convolutions.length + poolings.length)) / (convolutions.length + poolings.length + 2);
  filterCoordinates = [];
  for (let i=0; i < convolutions.length; i++) {
    showFilter(convolutions[i], kernelSize, 0, i * (stepSize + kernelSize) + stepSize);
    filterCoordinates.push([x, y + i * (stepSize + kernelSize) + stepSize, kernelSize]);
  }
  for (let i=0; i < poolings.length; i++) {
    showPooling(poolings[i], kernelSize, 0, (convolutions.length + i) * (stepSize + kernelSize) + stepSize);
    filterCoordinates.push([x, y + (convolutions.length + i) * (stepSize + kernelSize) + stepSize, kernelSize]);
  }
  translate(-x, -y);
}


function mouseClicked() {
  for (let i=0; i < filterCoordinates.length; i++) {
    if (mouseX > filterCoordinates[i][0] 
      && mouseX < filterCoordinates[i][0] + filterCoordinates[i][2] 
      && mouseY > filterCoordinates[i][1]
      && mouseY < filterCoordinates[i][1] + filterCoordinates[i][2]) {
      currentFilter = i;
      // draw red square around the filter
      draw();
      stroke(255, 0, 0);
      strokeWeight(2);
      noFill();
      square(filterCoordinates[i][0], filterCoordinates[i][1], filterCoordinates[i][2]);
      if (i < convolutions.length) {
        filteredArray = convolute(imgArray, convolutions[currentFilter]);
        showPixeledImage(width * 0.7, (height - imgSize) / 2, filteredArray , imgSize / 26);
      } else {
        filteredArray = pooling(imgArray, poolings[currentFilter - convolutions.length]);
        showPixeledImage(width * 0.7, (height - imgSize) / 2, filteredArray , imgSize / 14);
      }
      break;
    }
  }

}

function showPixeledImage(x, y, image, pixelSize) {
  translate(x, y);
  stroke(0);
  strokeWeight(14 / image.length);
  for (let i=0; i < image.length; i++) {
    for (let j=0; j < image[0].length; j++) {
      fill(image[j][i]);
      square(i * pixelSize, j * pixelSize, pixelSize);
    }
  }
  translate(-x, -y);
}
{
function windowResized() {
  resizeCanvas(windowWidth, windowWidth * aspectRatio);
  setup()
  draw();
}

function showBackground() {
  let transparency = 200;
  background(255);
  tint(255, transparency);
  image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, COVER, CENTER);
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
  noStroke();
  textAlign(RIGHT, TOP);
  h = 0;
  translate(x, y);
  textStyle(BOLD);
  // line(0, 0, 0, 100); uncomment this line for adjusting :))
  
  let nameSize = height * 0.06;
  fill(0);

  textSize(nameSize);
  text(gameName, 0 - nameSize * 0.25, h);
  h += nameSize;

  let schoolSize = height * 0.06;
  textSize(schoolSize);
  text('مدرسه تاسبتانه رستا ۱۴۰۲', 0 + schoolSize, h);
  h += schoolSize * 1.1;

  let devSize = height * 0.03;
  textSize(devSize);
  text(`نام طراح: ${developerName}`, 0, h);
  translate(-x, -y);
  textStyle(NORMAL);
}
}