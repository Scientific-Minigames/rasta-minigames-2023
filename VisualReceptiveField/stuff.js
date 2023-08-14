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
      textAlign(CENTER);
      fill (0);
      text(this.name , this.x + this.w/2 , this.y + this.h + 3);
      //textSize(15);
      //text(this.slider.value() , this.x + this.w  + 60 , this.y + this.h + this.textsize + 7);
      textSize(18);
      text(join([this.extra , ':' , this.slider.value()] ,'  ') , this.x +this.w/2 , this.y + this.h * 4 + this.textsize + 7);
    }
}




// dropdown + name ; option are not built in
// functions : getOptions , show
// inputs : name , x0 , y0 , w , h
class Mydropdown {
    constructor(name , x0 , y0 , w , h , options) {
      this.name = name ; 
      this.x = x0 ;
      this.y = y0 ;
      this.h = h ;
      this.w = w ;
      this.textsize = 18 ;
      
      // create dp
      this.dp = createSelect();
      this.dp.position(x0 + this.textsize + textWidth(name) + 50 , y0);
      this.dp.size(w , h);
      fill(255) ;
      this.dp.style('background-color', 'white');
      this.dp.style('color' , "#2E2C51");
      this.dp.style('border-radius', '5px');
      
      this.blinker = new Myblinker('' , 200);
      
      this.options = options ;
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

    Output (val) {
      if (this.dp.value() == this.options[1]){
        this.output = sqrt(sq(val)) ;
      }
      if (this.dp.value() == this.options[0]){
        this.output = 1 - sqrt(sq(val)) ;
      }
    }

    show() {
      // --- draws dp ---
      textSize(this.textsize);
      textAlign(LEFT);
      fill ( 0);
      text(this.name , this.x , this.y + this.h - 10 );
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

  show(x1 , y1 , a){ 
    // --- create axa blinker in x , y ---
    let r  = a*2*0.866/3 + 7.5  ;
    let speed = this.frequency;

    let x0 = 0 ;
    let y0 = -r ;

    push() ;
    translate(x1 , y1+r - 7.5) ;
    rotate(this.angle) ;

    rect(x0-7.5, y0-7.5, 15 , 15);
    noFill();
    strokeWeight(2);
    
    ellipse(0 , 0 , 2*r);
    pop();
    this.angle += speed/40;
    
  }

  show1(x1 , y1 , a){ 
    // --- create axa blinker in x , y ---
    
    let loopLength = 1.2*1000/this.frequency;
    let loopTime = ( millis() ) % loopLength;  // milliseconds

    fill(  78 , 135 , 140, 255 - map(loopTime, 0, loopLength, 0, 255));
    let ro = 1.5*map(loopTime, 0, loopLength, 0, 80) ;
    y1 -= ro/2 ;
    a += ro*0.866 ;

    //ellipse(x , y , a+ map(loopTime, 0, loopLength, 0, 50));
    triangle(x1 , y1 , x1-a/2 , y1 + 0.866*a , x1 + a/2 , y1 + 0.866*a);
    
  }

  show0(x1 , y1 , a){ 
    // --- create axa blinker in x , y ---
    
    let loopLength = 3*1000/this.frequency;
    let loopTime = ( millis() ) % loopLength;  // milliseconds

    if (loopTime < 200/this.frequency ) {
      fill( 0 , 0 , 255 );
      y1 -= 10 ;
      a += 20*0.866 ;
      triangle(x1 , y1 , x1-a/2 , y1 + 0.866*a , x1 + a/2 , y1 + 0.866*a);
    }
  }
}






// ==================== FUNCTIONS I ========================
// used to draw the model and to show blinkers
    
function drawModel(x0 , y0 , w , h , size , dropdown , slider , isBlink , blinkerType ) {
    // ------ draws model , blinkers -------
    // ------ uses spottyCircle , drawArrow , rotateXY ------
    
    // row 1
    let xr = x0  ; 
    let yr = y0 + 100*size ;
    let nr = 6 ;
    let dr = 80 *size ;
    let wr = (w-5*dr)/6  ; 
    let hr = 150*size ;
    // row 2
    let nb = 4 ;
    let rb = 100 * size ;
    let xb = x0 ;
    let yb = y0 + 150*size + hr + rb ;
    // row 3
    let nh = 2 ;
    let xh = x0 ;
    let yh = yb + rb + 30*size ;
    let wh = 150 ; 
    let hh = 50 ;
    // row 4
    let xg = x0 + w/2 ;
    let yg = yh + hh + 30*size ;
    let ag = 120 ;

    // ------draw arrows------ *** drawing context
    stroke(0,0,0,180);
    strokeWeight(3) ;
    drawingContext.setLineDash([5,7]);
    // 1st row
    line(xr+wr/2 , yr+hr , xb+rb/2 , yb);
    line(xr+wr/2+wr+dr , yr+hr , xb+rb/2 + 3/2*(dr+wr) , yb) ;
    line(xr+wr/2+2*(wr+dr) , yr+hr , xb+rb/2 + 3/2*(dr+wr) , yb) ;
    line(xr+wr/2+3*(wr+dr) , yr+hr , xb + w - rb/2 - 3/2*(dr+wr) , yb) ;
    line(xr+wr/2+4*(wr+dr) , yr+hr , xb + w - rb/2 - 3/2*(dr+wr) , yb) ;
    line(xr+wr/2+5*(wr+dr) , yr+hr , xb + w - rb/2 , yb) ;
    // 2nd row
    line(xb+rb/2 , yb , xh + rb + wh/2 , yh+hh/2) ;
    line(xb+w-rb/2 , yb , xh + w - rb - wh/2 , yh+hh/2) ;
    line(xb+rb/2 + 3/2*(dr+wr) , yb, xg , yg+ag/2) ;
    line(xb + w - rb/2 - 3/2*(dr+wr) , yb , xg , yg+ag/2) ;
    // 3rd row
    line( xh + rb + wh/2 , yh+hh/2 , xg , yg+ag/2) ;
    line( xh + w - rb - wh/2 , yh+hh/2 , xg , yg+ag/2) ;
    drawingContext.setLineDash([0,0]);
    
    // ------draw R rects------
    for (let i = 0 ; i <nr/2 ; i++) {
      if (i != 0){
        spottyRect('R' , xr + i *(dr+wr) , yr , wr , hr , "#64A6DE" ,"#2E2C51");
        spottyRect('R' , xr + w - wr - i *(dr+wr) , yr , wr , hr , "#64A6DE" ,"#2E2C51");
        textSize(14);
        text('\n مرکزی' , xr + i *(dr+wr)+wr/2+5 , yr);
        text('\n مرکزی' , xr + w - wr/2 - i *(dr+wr)+5 , yr);
      }
      else {
        spottyRect('R' , xr + i *(dr+wr) , yr , wr , hr , "#5E878C" ,"#2E2C51");
        spottyRect('R' , xr + w - wr - i *(dr+wr) , yr , wr , hr , "#5E878C" ,"#2E2C51");
        textSize(14);
        text('\n بیرونی' , xr + i *(dr+wr)+wr/2+5 , yr);
        text('\n بیرونی' , xr + w - wr/2 - i *(dr+wr)+5 , yr);
      }
    }

    // -------draw B circles------

    for (let i = 0; i <nb/2 ; i++) {
        spottyCircle('B' , xb + rb/2 + i*3/2*(dr+wr) , yb , rb , "#F67F00" ,"#2E2C51");
        spottyCircle('B' , xb + w - rb/2 - i*3/2*(dr+wr) , yb , rb , "#F67F00" ,"#2E2C51");
    }

    // ------draw H rects------
    
    for (let i = 0 ; i < nh/2 ; i++) {
        spottyRect('H' , xh + rb , yh , wh , hh ,"#FFFF8A" ,"#2E2C51");
        spottyRect('H' , xh + w - rb - wh , yh , wh , hh ,"#FFFF8A" ,"#2E2C51");
    }

    // ------draw triangle------
    dropdown.Output(slider.slider.value()) ;
    if (isBlink){
      if (blinkerType == 1){
        dropdown.blinker.show1(xg , yg , ag ) ;
      }
      if (blinkerType == 2){
        dropdown.blinker.show(xg , yg , ag ) ;
      }
      if (blinkerType == 3){
        dropdown.blinker.show0(xg , yg , ag ) ;
      }
      spottyTriangle(dropdown.output , xg , yg , ag , '#6A5ACD' ,"#2E2C5100") ;
      fill("#2E2C51");
      textSize(20);
      strokeWeight(1);
      textAlign(CENTER);
      textStyle(BOLD);
      text(round(dropdown.output,2),xg , yg +0.6*ag);
      textStyle(NORMAL);

    } 
    else {
      spottyTriangle(dropdown.output , xg , yg , ag , '#6A5ACD' ,"#2E2C51") ;
    }
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
    //rectMode(CENTER);
    rect(x, y, w , h , 5);
    noFill();
    stroke(strokeCol);
    strokeWeight(3);
    rect(x + 7*size , y - 7*size , w , h , 5);
    textSize(20);
    strokeWeight(1);
    fill(strokeCol);
    textAlign(CENTER);
    text(txt , x+w/2 , y+h/2);
  }

  function spottyTriangle(txt , x1 , y1 , a , Col , strokeCol){
        // ------ draws styled triangle -------
        let size = 1 ;//r/55;
        noStroke();
        fill(Col);
        triangle(x1 , y1 , x1-a/2 , y1 + 0.866*a , x1 + a/2 , y1 + 0.866*a);
        noFill();
        stroke(strokeCol);
        strokeWeight(3);
        triangle(x1 + 7*size , y1 - 7*size , x1-a/2 + 7*size , y1 + 0.866*a - 7*size , x1 + a/2 + 7*size , y1 + 0.866*a - 7*size);
        textSize(20);
        strokeWeight(1);
        fill(strokeCol);
        textAlign(CENTER);
        text(txt , x1 , y1+0.6*a);
  }

    
  
    