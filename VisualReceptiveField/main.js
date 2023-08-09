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
  
  const XB = 20  ;
  const YB = 20 ;
  const HB = 700 + 72 ;
  const WB = 400 ;
  const XM = WB + 50 ; 
  const YM = YB ; 
  const WM = 800 ;
  const HM = 500 ;
  const SIZE = 1 ;
  
  const selectOptions = ['Off Center','On Center'] ;
  
  let landscape , landscape0 , rasta , kamva ; 
  let isBlink = false ;
  let blinkerType = 1 ;




  function setup() {
    createCanvas(landscape0.width , landscape0.height);
    // ------ slider -------
    slider = new Myslider( 'Lighter Loc' ,'Offset From Center' , XM , YM , -1 , 1 , 0.01 , 0 , WM , 10);
    // ------ dp ------
    dropdown = new Mydropdown('Center Mode : ' , XB+10 , YB+20 , 200 , 30 , selectOptions);
    dropdown.getOptions(2);
    // ------ on/off button ------
    OnOFF = createButton( 'ON/OFF (blinker) ');
    OnOFF.position(XB+10 , YB +80);
    OnOFF.size(WB - XB - 30 , 32) ;
    OnOFF.mousePressed(changeIsBlink) ;
    // ------blinker buttons------
    //wave
    //type1 = createButton('blinker 1 (wave)') ;
    //type1.position(XB+10 , YB + 130);
    //type1.size(120 , 22 );
    //type1.mousePressed(BlinkerType1) ;
    //rotate
    //type2 = createButton('blinker 2 (rotate)') ;
    //type2.position(XB+10 , YB + 160);
    //type2.size(120 , 22);
    //type2.mousePressed(BlinkerType2) ;
    //light
    //type3 = createButton('blinker 3 (light)') ;
    //type3.position(XB+10 , YB + 190);
    //type3.size(120 , 22);
    //type3.mousePressed(BlinkerType3) ;
    }






  function draw() {
    // ------bg-------
    background(255);
    image(landscape , -100 , 0 , landscape0.width , landscape0.height) ; 
    fill('white');
    //noStroke()
    //rect(0 , HB+26, 4000 , 50);
    // ------ board-------
    fill ( 0 , 0 , 0 , 110 ) ;
    stroke(0,0,0,150) ;
    rect (0 , 0 , WB+XB , HB+YB);

    // ------model------
    drawModel(XM , YM , WM , HM , 1 , dropdown , slider , isBlink , blinkerType);
    showLight();
    // ------sliders------
    slider.show();
    //slider.slider.hide();
    // ------dp------
    dropdown.show();
    //showFunction(dropdown );

    // ------blinkers------
    showLogos();
  }








  function preload(){//open preload
    landscape0 = loadImage('bgNeuron0.png');
    landscape = loadImage('bg.jpg') ;
    rasta = loadImage('rasta.png');
    kamva = loadImage('kamva.png');
    light = loadImage('light.png');
  }

  function showLight(){
    tint(255 , 200) ;
    //image(light , XM + WM/2 + WM/2*slider.slider.value());
    imageMode(CENTER);
    image(light , XM + WM/2 + WM/2*slider.slider.value(), YM + 40 , light.width*0.04 , light.height*0.04);
    imageMode(CORNER);
  }

  function showLogos() {
    noTint();
    image(rasta, XB  , YB + HB -146 , 70 , 70 );
    image(kamva, XB + 75 , YB + HB -150, 90 , 90);
    showDescription(width * 0.29, height*0.88, 'فیلد های بینایی', 'نیکا رویگری');
    //text('Nika Rouygari' , 230 , YB + HB - 50);
  }

  function showDescription(x, y, gameName, developerName) {
    //textAlign(RIGHT, TOP);
    h = 0;
    translate(x, y);
    textStyle(BOLD);
    // line(0, 0, 0, 100); uncomment this line for adjusting :))
    
    fill(0,0,0,200);
    let nameSize = height * 0.07*0.4;
    textSize(nameSize);
    text(gameName, -150 -20 - nameSize * 0.25, h-30);
    h += nameSize;
  
    let schoolSize = height * 0.07*0.4;
    textSize(schoolSize);
    text('مدرسه تابستانه رستا ۱۴۰۲', -250+ schoolSize, h-25);
    h += schoolSize * 1.1;
  
    let devSize = height * 0.05*0.4;
    textSize(devSize);
    text(`نام طراح: ${developerName}`, -150-30, h-25);
    translate(-x, -y);
    textStyle(NORMAL);
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

