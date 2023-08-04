let bg;
let rastaLogo;
let kamvaLogo;

// image
let images;
let imgSize;
let imgArray;
let filteredImage;
let imageSrc;
let tmpImage;

// buttons
let buttons = [];

function preload() {
  images = [];
  for (let i = 0; i < 10; i++) {
    images.push([]);
    for (let j = 1; j <= 100; j++) {
      path = 'data/' + i + '/' + j + '.png';
      let img = loadImage(path);
      images[i].push(img);
    }
  }
}

function setup() {
  createCanvas(600, 400);
  imgSize = width * 0.4;
  imgOffset = width * 0.05;

  for (let i=0; i < 10; i++) {
    let button = createButton(i);
    button.mouseClicked(() => {
      const imagePath = getRandomPath(i);
      showImage(imagePath, imgOffset, imgOffset, imgSize);
    })
    button.position(imgOffset + i * imgSize / 10, imgOffset + imgSize + imgOffset);
    buttons.push(button);
  }
  const imagePath = getRandomPath(0);
  showImage(imagePath, imgOffset, imgOffset, imgSize);
}

function draw() {
  showGrid(imgOffset, imgOffset, 28);
}

function getRandomPath(num) {
  let sample = int(Math.random() * 100 + 1);
  path = 'data/' + num + '/' + sample + '.png';
  images[num][sample].loadPixels();
  imgArray = [];
  for (let i=0; i < images[num][sample].pixels.length; i = i + 4) {
    imgArray.push(images[num][sample].pixels[i]);
  }
  return path;
}

function showImage(path, x, y, size) {
  imageSrc?.remove();
  imageSrc = createImg(path, path);
  imageSrc.position(x, y);
  imageSrc.size(size, size);
  imageSrc.style("image-rendering", "pixelated");
  imageSrc.style("z-index", "-1");
}

function showGrid(x, y, pixelCount) {
  let pixelSize = imgSize / pixelCount;
  strokeWeight(0.2);
  stroke(255);
  for (let i=0; i < pixelCount; i++) {
    line(x + i * pixelSize, y, x + i * pixelSize, y + imgSize);
    line(x, y + i * pixelSize, x + imgSize, y + i * pixelSize);
  }
  strokeWeight(1);
  stroke(0);
}