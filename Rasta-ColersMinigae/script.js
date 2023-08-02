let slider1;
let slider2;
let slider3;
let button;
let bg;
let rastaLogo;
let kamvaLogo;
let stage=1;

function preload()
 {
  bg = loadImage('Assets/image/03.jpg');
  kamvaLogo = loadImage('Assets/image/kamva.png');
  rastaLogo = loadImage('Assets/image/rasta.png');
  bkamran = loadFont('Assets/font/bkamran.otf');
  vazir = loadFont('Assets/font//vazir.ttf');

}

function setup() 
{
  createCanvas(bg.width, bg.height);

    // create a buttom
    button = createButton('Check');
    button.position(810, 300);
    button.mousePressed(changeBG);
    button.style('width', '100px');
    button.style('height', '40px');
    button.style("background" , 'blue');


	// create some sliders
    slider1 = createSlider(0, 255, 0 );
    slider1.position(330, 280);
    slider1.style('width', '255px');

    slider2 = createSlider(0, 255, 0);
    slider2.position(330, 320);
    slider2.style('width', '255px');

    slider3 = createSlider(0, 255, 0);
    slider3.position(330, 360 , 50);
    slider3.style('width', '255px');
    
  }

    let randomNumbers = [];
    for(let i = 0; i < 6; i++)
     {
      randomNumbers.push(Math.floor(Math.random() * 255));
     }

     function draw() 
     {
      image(bg, 0, 0, width, height);

    var ra = slider1.value();
    var g = slider2.value();
    var b = slider3.value();
    fill(ra, g, b);
    square(350, 20, 200);
if(stage==1)
{
  fill(randomNumbers[0],0,0);
  circle(850, 200, 150);
}
 
if(stage==2)
{
  fill(randomNumbers[1],randomNumbers[2],0);
  circle(850, 200, 150);
}
if(stage==3)
{
  fill(randomNumbers[3],randomNumbers[4],randomNumbers[5]);
    circle(850, 200, 150);
}

	// print text
    fill(250,0,0);
    textSize(30);
	text('قرمز '+ra,600,285);
    fill(0,250,0);
	text('سبز '+g,600,325);
    fill(0,0,250);
	text('آبی '+b,600,365);
  showText()
  showLogos()
  }

function changeBG() 
{
    var ra = slider1.value();
	  var g = slider2.value();
	  var b = slider3.value();
    if((Math.abs(randomNumbers[0]-ra) <= 10)&&stage==1) 
    {
      alert(" موفق شدی \n حالا برو سراغ مرحله بعدی ");
      stage++;
    }
    else if((Math.abs(randomNumbers[1]-ra) <= 10 && Math.abs(randomNumbers[2]-g) <= 10)&&stage==2) 
    {
      alert(" موفق شدی \n حالا برو سراغ مرحله بعدی ");
      stage++;
    }
    else if((Math.abs(randomNumbers[3]-ra) <= 10 && Math.abs(randomNumbers[4]-g) <= 10 && Math.abs(randomNumbers[5]-b) <= 10)&&stage==3) 
    {
      alert(" همه مراحل رو با موفقیت تموم کردی");
    }
  }



  function showText() {
    textFont("bkamran");
    textSize(40);
    fill('#000000');
    text(' مسئله‌ رنگ ها (قرمز ، سبز ، آبی)  ',600,420)
    textFont("bkamran");
    textSize(30);
    fill('#000000');
    text(' مدرسه‌ی تابستانه ۱۴۰۲ رستا ',730,470)
    
  }
  
  
  function showLogos() {
    noTint();
    image(rastaLogo, 3.5, height - 101, 100, 100);
    image(kamvaLogo, 110, height - 101, 100, 100);
  }