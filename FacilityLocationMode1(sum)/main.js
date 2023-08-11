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
  
  const XG = 20  ;
  const YG = 20 ;
  const WG = 700 + 50 ;
  const HG = 500 + 50 ;
  const R = 20 ;
  const XB = XG + WG + 20 ;
  const YB = YG ;
  const WB = 300 + 50 ; 
  const HB = HG ;
  const A = 200 ; 
  const SIZE = 1 ;
  const selectOptions = ['MODE 1 (sum of distances)' , 'MODE 2 (maximum distance)'] ;
  const N = 3 ;

  let landscape , rasta , kamva ; 
  let AddPoint = false ;
  let showlines = true ;
  let showdis = false ;
  let AD = false ;
  let DL = false ;
  let SHUFFLE = false ;


  function setup() {
    // ------canvs------
    const W = landscape.width*1.2;
    const H = landscape.height*1.2 ;
    createCanvas(W, H);

    // ------DP------
    dropdown = new Mydropdown('Optimization Variable :' , XB + 15 , YB +40 , 150 , 30 , selectOptions);
    dropdown.getOptions( 2);
  
    
    
    // ------MAP------
    gm = new GameMap(N , 20 , XG ,YG , WG , HG , DL , AD) ;
    gm.getPoints() ;
    
    // ------MODE1 BUTTONS-------
    Delete = createButton('Delete Point') ;
    Delete.position(XB+25 , YB+130+50-80+50);
    Delete.size(123, 25);
    Delete.mousePressed(deletePoint) ;
    
    // ------MODE2 BUTTONS------
    OnOFF = createButton('ON/OFF (add point)    ');
    OnOFF.position(XB+25 , YB +50+50);
    OnOFF.size(250, 35);
    OnOFF.mousePressed(changeAddPoint);

    // ------input box------
    inp = createInput(N);
    inp.position(XB+25+150 , YB+130+50-80+50 + 50);
    inp.size(50 , 15);
    enter = createButton('shuffle');
    enter.position(inp.x + inp.width + 5, inp.y);
    enter.mousePressed(Shuffle);

  }

  function draw() {
    // ------bg-------
    const W = landscape.width*1.2;
    const H = landscape.height*1.2 ;
    background(255);
    image(landscape , 0 , 0 , W , H ) ; 

    // ------game board------
    fill (255 , 255 , 255 , A);
    noStroke();
    rect( XG ,  YG , WG , HG , R);
    // ------variable board------
    fill ("#2E2C5150");
    noStroke();
    rect( XB ,  YB , WB , HB , R);

    // ------dp------
    rect(XB , YB+40 , WB , 30);
    dropdown.show();
    dropdown.dp.hide();
    text('Sum Of Distances' ,  XB + 190, YB +60 );
    
    // ------input box------
    fill('black');
    //stroke('black');
    text('Number Of Points : ', inp.x-150 , inp.y + 15);

    // ------gm------
    gm.addpoint = AddPoint ;
    gm.showDis = showdis ;
    gm.showLines = showlines ;
    gm.add = AD ;
    gm.delete = DL ;
    gm.shuffle = SHUFFLE ;
    //gm.changeStat(AD , DL) ;
    gm.show(inp.value()) ;
    
    // ------reset------
    DL = false ;
    AD = false ;
    SHUFFLE = false ;
    
    // ------logos------
    showFunction(dropdown);
    showLogos();
  }



  function preload(){//open preload
    landscape = loadImage('bg.jpg');
    rasta = loadImage('rasta.png');
    kamva = loadImage('kamva.png');
    mode1 = loadImage('mode10.png');
    mode2 = loadImage('mode20.png');
    addimg = loadImage('addpoint1.png');
    delimg = loadImage('delpoint0.png');

  }

  function showFunction(dropdown ) {
    if (dropdown.dp.value() == selectOptions[0] ){
        //image(mode1 , XB + 22 , YB + 80 ,   mode1.width*0.9 , mode1.height*0.8);
      //text('در این مود متغیر بهینه سازی مجموع فواصل نقاط ابی از نقطه نارنجی رنگ است' , XB + 15 , YB + 80 ,XB+50 , YB + 160);
    }
    if (dropdown.dp.value() == selectOptions[1] ){
        //image(mode2 , XB + 22 , YB + 80 ,   mode2.width*0.9 , mode2.height*0.8);
      //text('در این مود متغیر بهینه سازی فاصله دورترین نقطه ابی از نقطه نارنجی رنگ است' , XB + 15 , YB + 80);
    }
    
    if (AddPoint) {
        //image(addimg , XB + 22 , YB + 80 +mode1.height ,   addimg.width*0.9 , addimg.height*0.8);
    }
    if (!AddPoint){
        //image(delimg , XB + 22 , YB + 80 +mode1.height ,   delimg.width*0.9 , delimg.height*0.8);
    }

  }

  function showLogos() {
    textAlign(LEFT);
    noTint();
    image(rasta, XB + 20 , YB + HB -100 + 4 , 60 , 60 );
    image(kamva, XB + 5+75 , YB + HB -100 , 70 , 70 );
    showDescription(width, height*0.87, 'مکان‌یابی تجهیزات', 'نیکا رویگری') ;
    //textAlign(LEFT);
  }

  function showDescription(x, y, gameName, developerName) {
    //textAlign(RIGHT, TOP);
    h = 0;
    translate(x, y);
    textStyle(BOLD);
    // line(0, 0, 0, 100); uncomment this line for adjusting :))
    
    fill(0,0,0,200);
    let nameSize = height * 0.065*0.5;
    textSize(nameSize);
    text(gameName, -150 -25- nameSize * 0.25, h-30);
    h += nameSize;
  
    let schoolSize = height * 0.065*0.5;
    textSize(schoolSize);
    text('مدرسه تابستانه رستا ۱۴۰۲', -250+10+ schoolSize, h-25);
    h += schoolSize * 1.1;
  
    let devSize = height * 0.04*0.5;
    textSize(devSize);
    text(`نام طراح: ${developerName}`, -170+4, h-28);
    translate(-x, -y);
    textStyle(NORMAL);
  }


  function changeAddPoint(){
    
    AddPoint = ! AddPoint ;

    if (AddPoint){
        Delete.remove();
        Add = createButton('Add Point') ;
        Add.position(XB+25 , YB+220+50-80+50);
        Add.mousePressed(addpoint) ;

        ShowLines = createButton('ON/OFF (show lines) ');
        ShowLines.position(XB+25 , YB + 120 +50-80+50);
        ShowLines.size(250, 35);
        ShowLines.mousePressed(changeshowlines);
        
        ShowDis = createButton('ON/OFF (show dis)    ');
        ShowDis.position(XB+25 , YB + 160 +50-80+50);
        ShowDis.size(250, 35);
        ShowDis.mousePressed(changeshowdis);
        inp.position(XB+25+150 , YB+130+50-80+50 + 135);
        enter.position(inp.x + inp.width + 5, inp.y);
    }
    else {
        Add.remove();
        Delete = createButton('Delete Point') ;
        Delete.position(XB+25 , YB+130+50-80+50);
        Delete.mousePressed(deletePoint) ;
        ShowDis.remove();
        ShowLines.remove();
        inp.position(XB+25+150 , YB+130+50-80+50 + 50);
        enter.position(inp.x + inp.width + 5, inp.y);
    }
  }

  function changeshowlines(){
    showlines = ! showlines ;
  }

  function changeshowdis(){
    showdis = ! showdis ;
  }

  function deletePoint(){
    // --- changes DL to true ---
    DL = true ;
  }

  function addpoint(){
    AD = true ;
  }

  function Shuffle(){
    SHUFFLE = true ;
  }