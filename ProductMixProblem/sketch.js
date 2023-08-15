let diam_h = 15;
let diam_w = 20;
let small_scale = 1
let cube_margin = 65;
let cube_text_offset = 20;
let cube_text;
let cube_color;
let cube_available;

let sw = 0.5;

let p1;
let p2;

let offsety = 50;
let base_text_size = 30
let bgImage;

function preload()
{
  bgImage = loadImage('assets/image/01.jpg');
  kamvaLogo = loadImage('assets/image/kamva.png');
  rastaLogo = loadImage('assets/image/rasta.png');
}



function setup() {
  createCanvas(windowWidth, windowWidth * aspectRatio); // aspect ratio 4x3 works better in kamva
  
  textAlign(CENTER, CENTER);
  textSize(base_text_size)
  strokeWeight(sw);
  
  textFont('bkamran'); // default font for our minigames

  
  cube_text = ["آلومینیوم", "مس", "سیلیکون"];
  cube_color = [color(192, 192, 192),  
                color(184, 115, 51),
                color(128, 128, 128)];
  cube_available = [100, 50, 40];
  cube_used = [0, 0, 0];
  
  p1 = new Product("موبایل", [5, 2, 4], 70);
  p2 = new Product("تبلت", [10, 3, 3], 120);
}

function draw() {
  showBackground();
  showLogos(width * 0.01, height * 0.8, height * 0.19);

  strokeWeight(sw)
  
  draw_all_cubes(50, 67);
  draw_cols(cube_available, "در دسترس", 50+diam_w, offsety, 0);
  draw_cols(cube_used, "استفاده شده", 135+diam_w, offsety, 1);
  
  draw_product(p1, p1.name, 250+diam_w, offsety);
  draw_product(p2, p2.name, 350+diam_w, offsety);
  
  show_profit(90, cube_text.length*cube_margin+offsety+70);
  
}


function draw_product(prod, prod_name, offsetx, offsety){
  let marginx = 70
  textSize(30)
  text(prod_name, offsetx+marginx, offsety, 50)
  textSize(base_text_size)
  for(let i=0; i<prod.uses.length; i+=1){
    textAlign(RIGHT, CENTER)
    textSize(25)
    text(prod.uses[i]+"x", offsetx+marginx, offsety+i*cube_margin+20, 27, 30)
    textSize(base_text_size)
    draw_cube(offsetx+marginx+30, 
              offsety+i*cube_margin+20, 
              diam_w*small_scale, 
              diam_h*small_scale, 
              cube_color[i], "")
  }
  textAlign(CENTER, CENTER)
  textSize(25);
  text(prod.price+"$", offsetx+marginx, offsety+prod.uses.length*cube_margin+45, 60)
  let button_offset = 50;
  prod.positionMinusButton(offsetx+marginx-15, 
                          offsety+prod.uses.length*cube_margin+button_offset+10)
  text(prod.num, offsetx+marginx+27, 
       offsety+prod.uses.length*cube_margin+button_offset+22)  
  prod.positionPlusButton(offsetx+marginx+diam_w*small_scale+25,
                           offsety+prod.uses.length*cube_margin+button_offset+10)
  textSize(base_text_size)
}


function draw_cols(list, label, offsetx, offsety, is_used){
  let marginx = 30;
  let rect_size = 70;
  textSize(20)
  text(label, offsetx+marginx, offsety, rect_size)
  textSize(base_text_size)
  for(let i=0; i<list.length; i+=1){
    if(is_used == true){
      if(cube_used[i] > cube_available[i]){ fill(224, 61, 61); }
      else{ fill(4, 224, 61); }
    }else{
      noFill();
      noStroke();
    }
    rect(offsetx+marginx, offsety+(i)*cube_margin+20, rect_size, 30)
    fill(0)
    stroke(0)
    text(list[i], offsetx+marginx, offsety+i*cube_margin+20, rect_size, 30)
  }
}


function draw_all_cubes(offsetx, offsety){
  for(let i=0; i<cube_text.length; i+=1){
    draw_cube(offsetx, 
              offsety+i*cube_margin, 
              diam_w, diam_h, 
              cube_color[i], cube_text[i]);
  }
}


function draw_cube(x, y, diam_w, diam_h, color_, text_){
  fill(color_);
  let diam_d = 0.93*sqrt(diam_w**2 + diam_h**2)/2;
  quad(x, y+diam_h/2, 
       x+diam_w/2, y, 
       x+diam_w, y+diam_h/2, 
       x+diam_w/2, y+diam_h);
  quad(x, y+diam_h/2, 
       x+diam_w/2, y+diam_h, 
       x+diam_w/2, y+diam_h+diam_d, 
       x, y+diam_h/2+diam_d);
  quad(x+diam_w/2, y+diam_h, 
       x+diam_w, y+diam_h/2, 
       x+diam_w, y+diam_h/2+diam_d, 
       x+diam_w/2, y+diam_h+diam_d);
  fill(0);
  textSize(17)
  text(text_, x, y+diam_h+diam_d, diam_w, cube_text_offset);
  textSize(base_text_size)
}


function Product(name, uses, price){
  this.name = name;
  this.uses = uses;
  this.price = price;
  
  this.num = 0;
  
  this.plusButton = createButton('+');
  this.plusButton.mousePressed(() => this.increase());
  this.minusButton = createButton('-');  
  this.minusButton.mousePressed(() => this.decrease());   
  
  this.positionPlusButton = function(x, y){
    this.plusButton.position(x, y);
  }
  this.positionMinusButton = function(x, y){
    this.minusButton.position(x, y);
  }
  
  this.increase = () => {
    this.num += 1;
    for(let i=0; i<this.uses.length; i+=1){
      cube_used[i] += this.uses[i];
    }
  }
  this.decrease = () => {
    if(this.num == 0) return;
    this.num -= 1;
    for(let i=0; i<this.uses.length; i+=1){
      cube_used[i] -= this.uses[i];
    }
  }
}

function show_profit(x, y){
  textAlign(LEFT, CENTER);
  let totalProfit = p1.price*p1.num+p2.price*p2.num;
  textSize(50)
  text("سود کل: "+totalProfit, x, y);
  textSize(base_text_size)
  textAlign(CENTER, CENTER);

}

const aspectRatio = 9 / 16;

// showing background. change transparency if needed.
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
  textAlign(RIGHT, TOP);
  h = 0;
  translate(x, y);
  textStyle(BOLD);
  // line(0, 0, 0, 100); uncomment this line for adjusting :))
  
  let nameSize = height * 0.07;
  textSize(nameSize);
  text(gameName, 0 - nameSize * 0.25, h);
  h += nameSize;

  let schoolSize = height * 0.07;
  textSize(schoolSize);
  text('مدرسه تاسبتانه رستا ۱۴۰۲', 0 + schoolSize, h);
  h += schoolSize * 1.1;

  let devSize = height * 0.04;
  textSize(devSize);
  text(`نام طراح: ${developerName}`, 0, h);
  translate(-x, -y);
  textStyle(NORMAL);
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth * aspectRatio);
  setup();
}