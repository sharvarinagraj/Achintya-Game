function  Enemy(x ,y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.xdir = 1;
    this.ydir = 0;

    this.shrink= function(){
        this.r = this.r - 2;
    }

    this.changePlace = function(){
        this.xd *= -1;
        this.y += this.r;
    }

    this.move = function(){
        this.x = this.x + this.xdir;
        this.y = this.y + this.ydir;
    }

    this.show = function() {
        fill(255 ,0 ,0);
        ellipse (this.x ,this.y ,this.r*2 ,this.r*2);
    }
    
}
//