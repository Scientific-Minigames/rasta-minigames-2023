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

  const selectOptions = ['Step Function','Sigmoid Functionk' , 'ReLU (Rectified Linear Unit)'] ;
  let  selectImages = [step , sigmoid , relu] ;
  let isBlink = false ;
  
  
  
  function setup() {
    createCanvas(landscape.width, landscape.height);
    slideri1 = new Myslider( 'input 1' ,'in' , XS , YS , 0 , 1 , 0.1 , 0.3 , WS - 150 , 10);
    slider1 = new Myslider( '' , 'w' , XS , YS+30 , 0 , 1 , 0.01 , 0.3 , WS - 150 , 10);
    slideri2 = new Myslider( 'input 2' ,'in', XS , YS+100 , 0 , 1 , 0.1 , 0.3 , WS - 150 , 10);
    slider2 = new Myslider( '' ,'w' , XS , YS+130 , 0 , 1 , 0.01 , 0.3  , WS - 150 , 10);
    slideri3 = new Myslider( 'input 3','in' , XS , YS+200 , 0 , 1 ,0.1 , 0.3 , WS - 150 , 10);
    slider3 = new Myslider( '' , 'w' , XS , YS+230 , 0 , 1 , 0.01 , 0.3  , WS - 150 , 10);
    sliderb = new Myslider( 'bias' , 'b' , XS , YS+300 , 0 , 1 , 0.1 , 0.3  , WS - 150 , 10);
    dropdown = new Mydropdown('Activation functions : ' , XS , YS + 400 , 160 , 30 , selectOptions , selectImages);
    dropdown.getOptions( 3);
    OnOFF = createButton( 'ON/OFF (blinker) ');
    OnOFF.position(XS , YS + 450);
    OnOFF.mousePressed(changeIsBlink);

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
    sliderb.show();
    // ------dp------
    dropdown.show();
    showFunction(dropdown );

    // ------model------
    // ------blinkers------
    drawModel(XM , YM , SIZE , dropdown , slider1 , slider2 , slider3 , slideri1 , slideri2 , slideri3 , sliderb , isBlink);
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
  }

  function showFunction(dropdown ) {
    if (dropdown.dp.value() == selectOptions[0] ){
      image(step , 200, 500 ,170 , 170);
    }
    if (dropdown.dp.value() == selectOptions[1] ){
      image(sigmoid , 200, 500 ,170 , 170);
    }
    if (dropdown.dp.value() == selectOptions[2] ){
      image(relu , 200, 500 ,170 , 170);
    }

  }

  function changeIsBlink(){
    isBlink = ! isBlink ;
  }
