class Mydropdown {
    constructor(name , x0 , y0 , w , h , options ) {
      this.name = name ; 
      this.x = x0 ;
      this.y = y0 ;
      this.h = h ;
      this.w = w ;
      this.textsize = 20 ;
      
      // create dp
      this.dp = createSelect();
      this.dp.position(x0 + this.textsize + textWidth(name) + 38 , y0);
      this.dp.size(w , h);
      fill(255) ;
      this.dp.style('background-color', 'white');
      this.dp.style('color' , "#2E2C51");
      this.dp.style('border-radius', '5px');
      
      //this.blinker = new Myblinker('' , 200);
      
      this.options = options ;
      //this.images = images ; 
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
  
    show() {
    // --- draws dp ---
    textSize(this.textsize);
    textAlign(LEFT);
    fill ( 0 , 0 , 0);
    //textFont(font0);
    text(this.name , this.x + 6 , this.y + this.h - 10);
    //this.blinker.getFrq(this.output*2);        
    }
}

class Gamepoint {
    constructor(x , y , r ){
        this.x = x ; 
        this.y = y ; 
        this.r = r ;
        this.selected = false ;
    }

    selectPoint(x0 , y0 , w , h){
        if (this.isSelect){
            if (mouseX<this.x+this.r/2 && mouseY<this.y+this.r/2 && mouseX>this.x-this.r/2 && mouseY>this.y-this.r/2){
                fill(0,255,0);
                if (mouseIsPressed){
                    this.selected = true ;
                }
            }
            else if (mouseX > x0 && mouseX < x0 + w && mouseY > y0 && mouseY< y0 + h) {
                if (mouseIsPressed){
                    this.selected = false ;
                }
            }
        }
    }

    show(isSelect , x0 , y0 , w , h){
        this.isSelect = isSelect;
        fill('blue') ; 
        if (this.selected){
            fill(0,255 ,0) ;
        }
        this.selectPoint(x0 , y0 , w , h);
        noStroke() ;
        ellipseMode(CENTER) ;
        ellipse(this.x , this.y , this.r , this.r) ;
        //text(isSelect , 100 , 100) ;
    }
}


class GameMap {
    constructor(n , r, x , y , w , h , dl , add ){
        this.n = n ;
        this.r = r ;
        this.x = x ;
        this.y = y ;
        this.w = w ;
        this.h = h ;

        this.max1 = n * sqrt(sq(w)+sq(h)) ;
        this.max2 = sqrt(sq(w)+sq(h)) ;
        this.val = 0 ;
        //this.dp = dropdown ;
        
        this.points = [] ;
        this.lstx = [] ;
        this.lsty = [] ;
        this.addpoint = true ;
        this.showDis = false ;
        this.showLines = true ;
        
        this.xc = this.x + this.w/2 ;
        this.yc = this.y + this.h/2 ;

        this.delete = dl ;
        this.add = add ;
        this.selected = false ;
        this.selected_i = '' ;

        this.shuffle = false ;
    }

    calVal() {
        let x0 = this.xc ;
        let y0 = this.yc ;
        this.val = 0 ;
        for (let i = 0 ; i < this.points.length ; i++){
            let v = sqrt(sq(this.points[i].x - x0) + sq(this.points[i].y - y0)) ;
            this.val += v ;          
        }

    }

    getPoints(){
        this.points = [] ;
        let i = 0 ;
        while (i < this.n){
            let x = random (this.r + this.x , floor(this.w / this.r) * this.r + this.x -this.r) ;
            let y = random (this.r + this.y , floor(this.h / this.r) * this.r + this.y - this.r) ;
            let c = x in this.lstx && y in this.lsty 
            if ( !c ){
                let p = new Gamepoint(x , y , this.r) ;
                append(this.points , p) ;
                append(this.lstx , x) ;
                append(this.lsty , y) ;
                i++ ;
            }
        }
    }
    
    deletePoint(){
        if (this.delete && this.selected){
            let points = [] ;
            let n = gm.points.length ;
            let j = gm.selected_i ;
            for (let i = 0 ; i < n ; i++) {
                if (i != j) {
                    append(points , gm.points[i]) ;
                }
            }
            gm.points = points ;
        }
    }

    addPoint(){
        if (this.add){
            let p = new Gamepoint(this.xc , this.yc , this.r);
            append(this.points , p);
            this.max1 += sqrt(sq(this.w)+sq(this.h))
        }
    }

    show1() {
        this.deletePoint();
        fill('black');
        
        if (mouseIsPressed){
            this.xc = mouseX ;
            this.yc = mouseY ;
        }
        
        for (let i = 0 ; i < this.points.length ; i++){

            let inpoint = this.xc<this.points[i].x+this.r/2 && this.yc<this.points[i].y+this.r/2 && this.xc>this.points[i].x-this.r/2 && this.yc>this.points[i].y-this.r/2 ;
            let inmap = this.xc > this.x + this.r/2 && this.xc < this.x + this.w - this.r/2  && this.yc > this.y+this.r/2  && this.yc< this.y + this.h - this.r/2 ;
            let selectpoint = this.selected_i == i ;
            
            if (inpoint){
                this.selected = true ;
                this.selected_i = i ;
                //text(this.selected_i , 100 , 100);
            } 

            if (!inpoint && inmap && selectpoint){
                this.selected = false ;
                this.selected_i = '' ;
            }
        
            this.points[i].show(!this.addpoint , this.x , this.y , this.w , this.h) ;
        }
    }

    show2() {
        this.addPoint() ;

        //let inmap = mouseX > this.x + this.r/2-5 && mouseX < this.x + this.w - this.r/2 +5 && mouseY > this.y+this.r/2 -5 && mouseY< this.y + this.h - this.r/2 + 5 ;
        
        if (mouseIsPressed){
            this.xc = mouseX ;
            this.yc = mouseY ;

            if ( mouseX < this.x + this.r/2-5) {
                this.xc = this.x + this.r/2-5
            }

            if ( mouseX > this.x + this.w - this.r/2 +5 ) {
                this.xc = this.x + this.w - this.r/2 +5
            }

            if ( mouseY < this.y+this.r/2 -5 ) {
                this.yc = this.y+this.r/2 -5
            }

            if ( mouseY > this.y + this.h - this.r/2 + 5 ) {
                this.yc = this.y + this.h - this.r/2 + 5
            }


        }

        for (let i = 0 ; i < this.points.length ; i++){

            if (this.showLines){
            fill('black') ;
                strokeWeight(1);
                stroke('black');
                drawingContext.setLineDash([2,2]);
                line (this.points[i].x , this.points[i].y , this.xc , this.yc);
                drawingContext.setLineDash([0,0]);
            }
            if (this.showDis) {
                let val = sqrt(sq(this.points[i].x - this.xc) + sq(this.points[i].y - this.yc));
                noStroke();
                textSize(12);
                text(round(val/100 , 2) , (this.xc+this.points[i].x)/2 , (this.yc + this.points[i].y) / 2);
            }

            this.points[i].show(!this.addpoint , this.x , this.y , this.w , this.h) ;
        }

        this.calVal();

        //let v = 255*this.val/this.max1 ;
        let a = map  (this.val , 0, this.max1*1.2 , 255 , 0) ;
        fill(255,69,255-a, 255) ;
        stroke(255,69,0);
        strokeWeight(3);
        ellipse ( this.xc  , this.yc , this.r , this.r );
        fill('black') ;
        noStroke();
        rect (this.xc  - this.r - 4 , this.yc - 2*this.r + 5 , this.r*2 + 5 , this.r) ;
        fill('white');
        textAlign(CENTER);
        textSize(16);
        text(round(this.val/100,2) , this.xc , this.yc - this.r);
        
    }

    show(n) {

        if (this.shuffle){
            this.n = n ;
            this.max1 = n * sqrt(sq(this.w)+sq(this.h)) ;
            this.max2 = sqrt(sq(this.w)+sq(this.h)) ;
            this.getPoints() ;

        }

        if (this.addpoint){
            this.show2() ;
        } else {
            this.show1()
        }

    }
}

