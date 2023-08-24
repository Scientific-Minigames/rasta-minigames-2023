const cols = [
  [
      "#D00000",
      "#F67F00",
      "#002F49",
      "#712A2B",
      "#2E2C51",
      "#60A561",
      "#4E878C",
  ],
  [
      "#D00000",
      "#F67F00",
      "#144D64",
      "#3F88C5",
      "#FF4365",
      "#136F63",
      "#9E4770",
      "#ffe819",
  ],
]

const XS = 20  ;
const YS = 50 ;
const XM = 800 + 30 ; 
const YM = 500 ;
const HS = 700 + 50 ;
const WS = 400 ; 
const SIZE = 1 ;


let landscape , rasta , kamva , sigmoid , step , relu ; 

const selectOptions = ['تابع اول','تابع دوم' , 'تابع سوم'] ;
let  selectImages = [step , sigmoid , relu] ;
let isBlink = true ;
let blinkerType = 1 ;



function setup() {
  createCanvas(landscape.width, landscape.height);
  slideri1 = new Myslider( 'ورودی 1' ,'ورودی' , XS , YS , 0 , 1 , 0.1 ,0.5 , WS - 150 , 10);
  slider2 = new Myslider( '' , 'وزن' , XS , YS+30 , -1 , 1 , 0.01 , 0 , WS - 150 , 10);
  slideri2 = new Myslider( 'ورودی 2' ,'ورودی', XS , YS+100 , 0 , 1 , 0.1 , 0.5 , WS - 150 , 10);
  slider1 = new Myslider( '' ,'وزن' , XS , YS+130 , -1 , 1 , 0.01 , 0  , WS - 150 , 10);
  slideri3 = new Myslider( 'ورودی 3','ورودی' , XS , YS+200 , 0 , 1 ,0.1 , 0.5 , WS - 150 , 10);
  slider3 = new Myslider( '' , 'وزن' , XS , YS+230 , -1 , 1 , 0.01 , 0  , WS - 150 , 10);
  //sliderb = new Myslider( 'bias' , 'b' , XS , YS+300 , 0 , 1 , 0.1 , 0.3  , WS - 150 , 10);
  dropdown = new Mydropdown(join([':','تابع مورد استفاده'] , ' '), XS , YS + 320 , 160 , 30 , selectOptions , selectImages);
  dropdown.getOptions( 3);
  //OnOFF = createButton( 'ON/OFF (blinker) ');
  //OnOFF.position(XS , YS + 372);ß
  //OnOFF.size(120 , 22) ;
  //OnOFF.mousePressed(changeIsBlink) ;
  // ------blinker buttons------
  //type1 = createButton('blinker 1 (wave)') ;
  //type1.position(XS , YS + 420);
  //type1.size(120 , 22);
  //type1.mousePressed(BlinkerType1) ;
  
  //type2 = createButton('blinker 2 (rotate)') ;
  //type2.position(XS , YS + 450);
  //type2.size(120 , 22);
  //type2.mousePressed(BlinkerType2) ;

  //type3 = createButton('blinker 3 (light)') ;
  //type3.position(XS , YS + 480);
  //type3.size(120 , 22);
  //type3.mousePressed(BlinkerType3) ;
}

function draw() {
  // ------bg-------
  background(255);
  image(landscape , -100 , 0  ) ; 
  fill('white');
  noStroke()
  rect(0 , HS+26, 4000 , 50);
  // ------slider board-------
  fill ( 0 , 0 , 0 , 110 ) ;
  stroke(0,0,0,150) ;
  rect (XS - 20 + WS/2 , YS - 50 + HS/2 , WS , HS );
  // ------sliders------
  slideri1.show();
  slideri2.show();
  slideri3.show();
  slider1.show();
  slider2.show();
  slider3.show();
  //sliderb.show();
  // ------dp------
  dropdown.show();
  showFunction(dropdown );

  // ------model------
  // ------blinkers------
  //text (blinkerType , 100 , 100) ;
  drawModel(XM , YM , SIZE , dropdown , slider1 , slider2 , slider3 , slideri1 , slideri2 , slideri3 , isBlink , blinkerType);
  showLogos();
}


function preload(){//open preload
  //neuronModel = loadImage('neuronmodelblack.png')
  landscape = loadImage('bgNeuron0.png');
  rasta = loadImage('rasta.png');
  kamva = loadImage('kamva.png');
  step = loadImage('STEP.png');
  sigmoid = loadImage('SIGMOID.png');
  relu = loadImage('RELU.png');
  //font0 = loadFont('Handjet-Light.ttf');
}

function showLogos() {
  noTint();
  image(rasta, XS + 1135 , YS + HS -146 , 60 , 60 );
  image(kamva, XS + 1200 , YS + HS -150 , 70 , 70 );
  showDescription(width * 0.965, height * 0.76, 'مدل ساده نورون', 'نیکا رویگری');
}

function showFunction(dropdown ) {
  if (dropdown.dp.value() == selectOptions[0] ){
    image(step , XS+20 , YS + 370 ,170 , 170);
  }
  if (dropdown.dp.value() == selectOptions[1] ){
    image(sigmoid , XS+20 , YS + 370 ,170 , 170);
  }
  if (dropdown.dp.value() == selectOptions[2] ){
    image(relu ,XS+20 , YS + 370 ,170 , 170);
  }

}

function changeIsBlink(){
  isBlink = ! isBlink ;
}

function BlinkerType1(){
  blinkerType = 1 ;
}

function BlinkerType2(){
  blinkerType = 2 ;
}

function BlinkerType3(){
  blinkerType = 3 ;
}

  function showDescription(x, y, gameName, developerName) {
    //textAlign(RIGHT, TOP);
    h = 0;
    translate(x, y);
    textStyle(BOLD);
    // line(0, 0, 0, 100); uncomment this line for adjusting :))
    
    fill(0,0,0,200);
    let nameSize = height * 0.07*0.5;
    textSize(nameSize);
    text(gameName, -150 -5 - nameSize * 0.25, h-30);
    h += nameSize;
  
    let schoolSize = height * 0.07*0.5;
    textSize(schoolSize);
    text('مدرسه تابستانه رستا ۱۴۰۲', -250+10+ schoolSize, h-25);
    h += schoolSize * 1.1;
  
    let devSize = height * 0.04*0.5;
    textSize(devSize);
    text(`نام طراح: ${developerName}`, -170+17, h-30);
    translate(-x, -y);
    textStyle(NORMAL);
  }


  function changeIsBlink(){
    isBlink = ! isBlink ;
  }

  
