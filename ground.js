class Ground{

    constructor(x,y, w, h){
        this.xposition = x;
        this.yposition = y;
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x, y, w, h);
        World.add(world, this.body);
    }
    display(){
        fill("yellow");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}