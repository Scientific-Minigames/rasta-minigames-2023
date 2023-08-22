// ==================== CLASSES =========================

// slider + name + value + on/off switch + blinker
// functions : getBlinker , OnOffButton , show
// inputs : name , x0 , y0 , min , max , val0 , w , h
class Myslider {
  constructor(name , extra , x0 , y0 , min , max , step , val0 , w , h){
    this.name = name ;
    this.extra = extra ;
    this.x = x0 ;
    this.y = y0 ;
    this.h = h ;
    this.w = w ;
    this.textsize = 18 ;
  
    this.slider = createSlider (min , max , val0 , step) ;
    this.slider.position (x0 , y0 + this.textsize + 5) ;
    this.slider.size (w , h) ;	

    //this.input = creat
  }
  
  getInput(){

  }
  show() {
    noStroke();
    textSize(this.textsize);
    textAlign(LEFT);
    fill (0);
    text(this.name , this.x , this.y + this.h + 3);
    textSize(15);
    //text(this.slider.value() , this.x + this.w  + 60 , this.y + this.h + this.textsize + 7);
    textSize(18);
    text(join([this.extra , ':' , this.slider.value() ] ,'  ') , this.x + this.w  + 15 , this.y + this.h + this.textsize + 7);
  }
}
  
// dropdown + name ; option are not built in
// functions : getOptions , show
// inputs : name , x0 , y0 , w , h
class Mydropdown {
  constructor(name , x0 , y0 , w , h , options , images) {
    this.name = name ; 
    this.x = x0 ;
    this.y = y0 ;
    this.h = h ;
    this.w = w ;
    this.textsize = 23 ;
    
    // create dp
    this.dp = createSelect();
    this.dp.position(x0+20 , y0);//this.textsize + textWidth(name) + 50 , y0);
    this.dp.size(w , h);
    fill(255) ;
    this.dp.style('background-color', 'white');
    this.dp.style('color' , "#2E2C51");
    this.dp.style('border-radius', '5px');
    
    this.blinker = new Myblinker('' , 200);
    
    this.options = options ;
    this.images = images ; 
    this.output = '' ;
  }
  
  getOptions (lenght) {
    // --- get options ---
    let i = 0 ;
    while ( i< lenght){
      this.dp.option( this.options[i]);
      i++;
    }
  }

  Output ( xArr , wArr , b , lenght) {

    sum = weightedSum(xArr , wArr , b , lenght) ;
    if (this.dp.value() == this.options[0]){
      this.output = round(Step(sum) ,2);
    }
    if (this.dp.value() == this.options[1]){
      this.output = round(Sigmoid(sum) ,2);
    }
    if (this.dp.value() == this.options[2]){
      this.output = round(ReLU(sum) ,2);
    }
  }

  show() {
    // --- draws dp ---
    textSize(this.textsize);
    textAlign(LEFT);
    fill ( 0);
    //textFont(font0);
    text(this.name , this.x+this.w+50 , this.y + this.h - 6 );
    //this.blinker.getFrq(pow(this.output,1.7));
    this.blinker.getFrq(this.output*3);

    
    
  }
}
  
// blinker + name  ///////////
// functions : getFrq , stopblinking , show
// inputs : name , x0 , y0 , frequency , lapse
class Myblinker {
  constructor(name , lapse) {
    this.name = name ;
    this.lapse = lapse ;
    this.isShow = true ;
    this.angle  = 0 ;
  }
  
  getFrq(frequency){
    // --- gets frequency ---
    this.frequency = frequency ;
  }
  
  stopblinking() {
      // --- nextShiney = false ---
    this.isShow = false ;
  }

  show(x , y , a){ 
    // --- create axa blinker in x , y ---
    let x0 = a/2 + 7 ;
    let y0 = 0  ;
    let speed = this.frequency;
    //ellipse(x0 + x, y0 + y, 10);
    //newArr = rotateXY(x , y , [x0] , [y0] , 1 , tan(this.angle)) ;

    push() ;
    translate(x , y) ;
    rotate(this.angle) ;
    

    //fill(0 ,255 ,0) ;
    //noStroke() ;
    rect(x0, y0, 10 , 10);
    pop();
    this.angle += speed/40;
    
  }

  show1(x , y , a){ 
    // --- create axa blinker in x , y ---
    
    let loopLength = 1.2*1000/this.frequency;
    let loopTime = ( millis() ) % loopLength;  // milliseconds
    
    //fill( 78 , 135 , 140 , 255 - map(loopTime, 0, loopLength, 0, 255));
    ///if (loopTime < 200/this.frequency ) {
    fill(  78 , 135 , 140, 255 - map(loopTime, 0, loopLength, 0, 255));
    ellipse(x , y , a+ map(loopTime, 0, loopLength, 0, 50));
    ///}
    
  }

  show0(x , y , a){ 
    // --- create axa blinker in x , y ---
    
    let loopLength = 3*1000/this.frequency;
    let loopTime = ( millis() ) % loopLength;  // milliseconds
    
    //fill( 78 , 135 , 140 , 255 - map(loopTime, 0, loopLength, 0, 255));
    if (loopTime < 200/this.frequency ) {
      fill( 0 , 0 , 255 );
      ellipse(x , y , a+10);

    }
  }
}
  

// ==================== FUNCTIONS I ========================
// math functions
function weightedSum(xArr , wArr , b , lenght){
i = 0 ;
sum = 0 ;
while ( i < lenght ) {
  sum += xArr[i]*wArr[i] ;
  i ++ ;
}

return sum + b ;
}

function Sigmoid(x){
return 1 / (1 + exp(-x)) ;
}

function Step(x){
if (x >= 0) {
  return 1 ;
}
else {
  return 0 ;
}
}

function ReLU(x){
return max (0 , x) ;
}

// ==================== FUNCTIONS I ========================
// used to draw the model and to show blinkers
  
function drawModel(x0 , y0 , size , dropdown , slider1 , slider2 , slider3  , slideri1 , slideri2 , slideri3 , isBlink , blinkerType ) {
// ------ draws model , blinkers -------
// ------ uses spottyCircle , drawArrow , rotateXY ------

let rm = 100 * size ;
let ri = 55 * size ;
let xi = x0 - rm*2 - ri ;
let yi = y0 ;
let tnj = tan(0.5) ; // in radiant
let xa = xi + ri + 3 * size ;
let ya = yi ;
let ra = 70 * size ; 
let wa = x0 - xa - 60 * size ;
let ha = 5 * size ; 
let wta = 20  * size ;
let hta = 10  * size ;
let xaf = x0 + 80 * size + 10 ;
let ro = 70  * size ;
let xo = xaf + wa + 5 * size + ro ;
let yo = y0 ;
let wl = 12 * size ;
let xb = x0 ;
let yb = y0 + rm + 10 ;
let wb = 110 * size ;
let hb = 30 *size ;

// draw biases
spottyRect('' ,0 , 0 , 0 , 0 ,"#64A6DE" ,"#64A6DE00");
textAlign(CENTER);
textSize(20);
fill("#2E2C51");
strokeWeight(3);
// text('bias is 0', xb  , yb+6);



// draw main circle
spottyCircle('' ,x0 , y0 , rm , "#D00000" , "#2E2C51");
stroke("#2E2C51") ;
// line(x0 , y0 -rm/2 +2 , x0 , y0 + rm/2 -2 );
fill('rgb(200,200,220)') ;
textAlign(CENTER) ;
textSize(24);
text('Σ  |  ƒ' , x0  , y0 );

// draw input circles
spottyCircle(slideri2.slider.value() ,xi , yi , ri , "#F67F00" , "#2E2C51");
let up_pose = rotateXY(x0 , y0 , [xi] , [yi] , 1 , tnj);
let down_pose = rotateXY(x0 , y0 , [xi] , [yi] , 1 , -tnj);
spottyCircle(slideri1.slider.value() ,up_pose[0][0] , up_pose[1][0] , ri , "#F67F00" , "#2E2C51");
spottyCircle(slideri3.slider.value() ,down_pose[0][0] , down_pose[1][0] , ri , "#F67F00" , "#2E2C51");

// draw output circle 
xArr = [slideri1.slider.value() , slideri2.slider.value() , slideri3.slider.value()] ;
wArr = [slider1.slider.value() , slider2.slider.value() , slider3.slider.value()] ;
// b = sliderb.slider.value() ;
b = 0 ;
dropdown.Output(xArr , wArr , b , 3) ;
if (isBlink){
  if (blinkerType == 1){
    dropdown.blinker.show1(xo , yo , ro ) ;
  }
  if (blinkerType == 2){
    dropdown.blinker.show(xo , yo , ro ) ;
  }
  if (blinkerType == 3){
    dropdown.blinker.show0(xo , yo , ro )
  }
  spottyCircle(dropdown.output , xo , yo , ro , "#4E878C" , "#2E2C5100");
  fill("#2E2C51");
  textSize(20);
  strokeWeight(1);
  textAlign(CENTER);
  textStyle(BOLD);
  text(dropdown.output,xo , yo -14, ro);
  textStyle(NORMAL);
}
else {
  spottyCircle(dropdown.output , xo , yo , ro , "#4E878C" , "#2E2C51");
}

// draw arrows
drawArrow (slider1.slider.value(), xa , ya , wa , ha , wta , hta , ra , 0);
drawArrow (slider2.slider.value(), xa , ya , wa , ha , wta , hta , ra , tnj);
drawArrow (slider3.slider.value(), xa , ya , wa , ha , wta , hta , ra , -tnj);  
drawArrow ('خروجی',xaf , ya , wa * 1.2 , ha , wta * 1.5 , hta , ra , 0);
}

function spottyCircle(txt , x, y , r , Col , strokeCol ) {
// ------ draws styles circles -------
let size = 1 ;//r/55;
//blendMode(DARKEST);
noStroke();
fill(Col);
ellipseMode(CENTER);
ellipse(x, y, r , r);
noFill();
stroke(strokeCol);
strokeWeight(3);
ellipse(x + 7*size , y - 7*size , r , r);
textSize(20);
strokeWeight(1);
fill(strokeCol);
textAlign(CENTER);
text(txt , x , y);
}

function spottyRect(txt , x, y , w , h , Col , strokeCol){
// ------ draws styled rect -------
let size = 1 ;//r/55;
//blendMode(DARKEST);
noStroke();
fill(Col);
rectMode(CENTER);
rect(x, y, w , h , 5);
noFill();
stroke(strokeCol);
strokeWeight(3);
rect(x + 7*size , y - 7*size , w , h , 5);
textSize(20);
strokeWeight(1);
fill(strokeCol);
textAlign(CENTER);
text(txt , x , y);
}

function drawArrow(val , x1 , y1 , w , h , wt , ht , r , tnj ) {
// ------takes shape and origin and rotation ------
// ------draws styled arrow-------
// ------uses rotateXY------
// defult shape
let Col = color("#173C70") ;
Col.setAlpha(150);
let strokeCol = color("#2E2C51") ;
strokeCol.setAlpha(100);
let x2 = x1 + w ; 
let y2 = y1 ;
let xArr0 = [x2 , x2 - wt , x2 -wt , x1 , x1 , x2 - wt ,x2 - wt, x2];
let yArr0 = [y2 , y2 - ht , y2 - h , y2 - h , y2 + h , y2 + h , y2 +ht , y2];
let length = 8 ;

// blendMode(DARKEST); ????????????????
stroke(strokeCol);
strokeWeight(2) ;
fill(Col);

// rotate arrow around origin
let Arr = rotateXY(x2 + r , y2 ,xArr0 , yArr0 , length , tnj) ;
let xArr = Arr[0] ;
let yArr = Arr[1] ;

// draw arrow
beginShape();
curveVertex(xArr[1], yArr[1]);
curveVertex(xArr[2], yArr[2]);
curveVertex(xArr[3], yArr[3]);
curveVertex(xArr[4], yArr[4]);
curveVertex(xArr[5], yArr[5]);
curveVertex(xArr[6], yArr[6]);
endShape();

beginShape();
curveVertex(xArr[0], yArr[0]);
curveVertex(xArr[0], yArr[0]);
curveVertex(xArr[1], yArr[1]);
curveVertex(xArr[6], yArr[6]);
curveVertex(xArr0[7], yArr0[7]);
curveVertex(xArr0[7], yArr0[7]);
endShape();

// arrow name
textSize(18);
textAlign(CENTER);
fill('black');
text(val , (xArr[0] + xArr[3]) /2 , (yArr[0] + yArr[3]) /2 - 10 );
}

function rotateXY(x0 , y0 , xArr,yArr , length , tnj) {
// ------rotates each array (of x , y) around x0 , y0 by tan-1------
// ------returns the resulting arrays------
let Sin = sqrt(sq(tnj)/(1+sq(tnj)));
let Cos = sqrt(1/(1+sq(tnj)));
if (tnj < 0 ) { 
    Sin = -sqrt(sq(tnj)/(1+sq(tnj)));
}
let i = 0 ;
while (i< length){
    let newX = (xArr[i]-x0)*Cos - (yArr[i]-y0)*Sin + x0 ; 
    let newY = (yArr[i]-y0)*Cos + (xArr[i]-x0)*Sin + y0 ; 
    xArr[i] = newX ;
    yArr[i] = newY ;
    i++	;	
}
return [xArr ,yArr];
}
