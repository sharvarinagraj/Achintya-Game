function Player() {
    this.x = width/2;
    //this.xdir = 0;

    this.show =function() {
        fill(255);
        rectMode(CENTER);
        rect (this.x,height-20,50,20);
    }    

    this.move =function(dir){
        this.x = dir*4;
    }

    this.setDir =function(dir){
        this.x = dir;
    }


    // this.setDirect = function(dir){
    //     this.xdir = dir;
    // }

}