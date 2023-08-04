let stack;
let items;

let bg;
let rastaLogo;
let kamvaLogo;

let ITEM_WIDTH = 50;
let ITEM_HEIGHT = 10;
let STACK_SIZE = 40;

let colors = [
  '#819f71',
  '#49e30b',
  '#a0f207',
  '#b1123a',
  '#825112',
  '#396f34',
  '#f56505',
  '#0003eb',
  '#53ab80',
  '#7cbe58',
  '#6c4332',
  '#a92432',
  '#6ba986',
  '#f09097',
  '#bacf3e',
  '#dfee76',
  '#9c3e7b',
  '#edfd5a',
  '#3369ca',
  ]


function preload() {
  bg = loadImage('../assets/backgrounds/01.jpg');
  kamvaLogo = loadImage('../assets/logos/kamva.png');
  rastaLogo = loadImage('../assets/logos/rasta.png');
}

function setup() {
  stack = [];
  items = [
    [8, 20],
    [4, 30],
    [12, 5],
    [5, 10],
    [5, 10],
    [3, 5],
    [7, 30],
  ];
  for (let i=0; i < items.length; i++) {
    items[i].push(colors[i]);
  }

  createCanvas(bg.width, bg.height);
}

function draw() {
  background(255);
  tint(255, 150);
  image(bg, 0, 0, width, height);
  showDottedLines();
  showItems();
  showStack();
  showText();
  showLogos();
}

function showDottedLines() {
  bot = height / 2;
  setLineDash([5, 5]);
  for (let i=0; i < 15; i++) {
    y = bot - ITEM_HEIGHT * i;
    strokeWeight((i % 5 == 0)? 1.5: 0.25);
    line(0 + 30, y, width - 10, y);
    if (i % 5 == 0) {
      text(i, 15, y + 4);
    }
  }
  setLineDash([]);
}

function addToStack(item) {
  
  if (getTotal()[0] + item[0] > STACK_SIZE) {
    return false;
  }
  stack.push(item);
  return true;
}

function addToItems(item) {
  for (let i=0; i < items.length; i++) {
    if (items[i] == null) {
      items[i] = item;
      return;
    }
  }
}

function showItems() {
  spacing = (width - items.length * 50) / (items.length + 1);
  for (let i=0;i<items.length; i++) {
    if (items[i] == null) continue;
    showVerticalItem(...items[i], spacing + i * (spacing + ITEM_WIDTH), height/2);
  }
}

function showStack() {
  noFill();
  strokeWeight(4);
  rect(width / 2 - STACK_SIZE * ITEM_HEIGHT / 2 - 5, 0.6 * height - 5, STACK_SIZE * ITEM_HEIGHT + 10, ITEM_WIDTH + 10);
  fill(0);
  let left = width / 2 - STACK_SIZE * ITEM_HEIGHT / 2;
  for (let i=0; i < stack.length; i++) {
    showHorizontalItem(...stack[i], left, 0.6 * height);
    left += stack[i][0] * ITEM_HEIGHT;
  }
}

function mouseClicked(){
  if (mouseY < 0.6 * height) {
    for (let i=0; i < items.length; i++) {
      if (items[i] == null) continue;
      let xc = spacing + i * (spacing + ITEM_WIDTH) + ITEM_WIDTH / 2;
      let yc = (height - items[i][0] * ITEM_HEIGHT) / 2
      if (checkInside(items[i][0], xc, yc)) {
        if (addToStack(items[i])) {
          console.log(i);
          items[i] = null;
          return;
        }
      }
    }
  } else {
    let left = width / 2 - STACK_SIZE * ITEM_HEIGHT / 2;
    for (let i=0; i < stack.length; i++) {
      xc = left + stack[i][0] * ITEM_HEIGHT / 2;
      yc = 0.6 * height + ITEM_WIDTH / 2;
      if (checkInside(stack[i][0], xc, yc)) {
        let item = stack.splice(i, 1)[0];
        addToItems(item);
        return;
      }
      left += stack[i][0] * ITEM_HEIGHT;
    }
  }
}

function showVerticalItem(height, value, c, x, y) {
  strokeWeight(1);
  fill(color(c));
  rect(x, y - height * ITEM_HEIGHT, ITEM_WIDTH, ITEM_HEIGHT * height);
  fill(0);
  textSize(23);
  textAlign(CENTER);
  // text(value + '$', x + ITEM_WIDTH/2, y - ITEM_HEIGHT * height / 2 + 6);
  text(value + '$', x + ITEM_WIDTH/2, y + 16);
}

function showHorizontalItem(height, value, c, x, y) {
  strokeWeight(1);
  fill(color(c));
  rect(x, y, ITEM_HEIGHT * height, ITEM_WIDTH);
  fill(0);
  textSize(23);
  textAlign(CENTER);
  text(value + '$', x + ITEM_HEIGHT * height / 2, y + ITEM_WIDTH / 2 + 6);
}


function checkInside(height, x, y) {
  if (Math.abs(mouseY - y) > ITEM_WIDTH/2) return false;
  if (Math.abs(mouseX - x) > height * ITEM_HEIGHT / 2) return false;
  return true;
}

function getTotal() {
  let stackHeight = 0;
  let stackValue = 0;
  for (let i=0; i < stack.length; i++) {
    stackHeight += stack[i][0];
    stackValue += stack[i][1];
  }
  return [stackHeight, stackValue];
}

function showText() {
  textFont("bkamran");
  textSize(50);
  text('کوله پشتی', 200, height * 0.6 + ITEM_WIDTH / 2 + 15)
  textSize(40);
  text('ارزش کل: ' + getTotal()[1], width/2, height - 100);
  text('ظرفیت باقیمانده: ' + (STACK_SIZE - getTotal()[0]), width/2, height - 60);
  
}


function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function showLogos() {
  noTint();
  image(rastaLogo, 3.5, height - 101, 100, 100);
  image(kamvaLogo, 110, height - 101, 100, 100);
}