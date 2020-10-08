class Rope{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            length: 200,
            stiffness: 0.3
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var startPoint = this.chain.bodyA.position;
        var endPoint = this.chain.pointB;
        line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
    }
}