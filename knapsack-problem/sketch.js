let bg;
let stack;
let items;

let ITEM_WIDTH = 50;
let ITEM_HEIGHT = 10;
let STACK_SIZE = 40;

function preload() {
  bg = loadImage('../assets/backgrounds/01.jpg');
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
  createCanvas(bg.width, bg.height);
}

function draw() {
  background(255);
  tint(255, 150);
  image(bg, 0, 0, width, height);
  showItems();
  showStack();
  showText();
}

function addToStack(height, value) {
  
  if (getTotal()[0] + height > STACK_SIZE) {
    return false;
  }
  stack.push([height, value]);
  return true;
}

function addToItems(height, value) {
  for (let i=0; i < items.length; i++) {
    if (items[i] == null) {
      items[i] = [height, value];
      return;
    }
  }
}

function showItems() {
  spacing = (0.7 * width - items.length * 50) / (items.length + 1);
  for (let i=0;i<items.length; i++) {
    if (items[i] == null) continue;
    showItem(...items[i], spacing + i * (spacing + ITEM_WIDTH), height/2);
  }
}

function showStack() {
  strokeWeight(5);
  rect(5/6 * width, (height - STACK_SIZE * ITEM_HEIGHT) / 2, ITEM_WIDTH, STACK_SIZE * ITEM_HEIGHT);
  bot = (height + STACK_SIZE * ITEM_HEIGHT) / 2;
  for (let i=0; i < stack.length; i++) {
    showItem(...stack[i], 5/6 * width, bot);
    bot -= stack[i][0] * ITEM_HEIGHT;
  }
}

function mouseClicked(){
  if (mouseX < 0.7 * width) {
    for (let i=0; i < items.length; i++) {
      if (items[i] == null) continue;
      let xc = spacing + i * (spacing + ITEM_WIDTH) + ITEM_WIDTH / 2;
      let yc = (height - items[i][0] * ITEM_HEIGHT) / 2
      if (checkInside(items[i][0], xc, yc)) {
        if (addToStack(...items[i])) {
          console.log(i);
          items[i] = null;
          return;
        }
      }
    }
  } else {
    bot = (height + STACK_SIZE * ITEM_HEIGHT) / 2;
    for (let i=0; i < stack.length; i++) {
      xc = 5/6 * width + ITEM_WIDTH / 2;
      yc = bot - stack[i][0] * ITEM_HEIGHT / 2;
      if (checkInside(stack[i][0], xc, yc)) {
        console.log(i);
        item = stack.splice(i, 1)[0];
        addToItems(...item);
        return;
      }
      bot -= stack[i][0] * ITEM_HEIGHT;
    }
  }
}

function showItem(height, value, x, y) {
  strokeWeight(3);
  rect(x, y - height * ITEM_HEIGHT, ITEM_WIDTH, ITEM_HEIGHT * height);
  textSize(16);
  textAlign(CENTER);
  text(value + '$', x + ITEM_WIDTH/2, y - 5);
}

function checkInside(height, x, y) {
  if (Math.abs(mouseX - x) > ITEM_WIDTH/2) return false;
  if (Math.abs(mouseY - y) > height * ITEM_HEIGHT / 2) return false;
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
  text('Remaining volume:' + (STACK_SIZE - getTotal()[0]), width/2, 40);
  text('Total value:' + getTotal()[1], width/2, 80);
}