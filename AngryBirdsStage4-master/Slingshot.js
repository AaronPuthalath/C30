class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image3 = loadImage("./sprites/sling3.png");
        this.image1 = loadImage("./sprites/sling1.png");
        this.image2 = loadImage("./sprites/sling2.png");
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    attach(bodyA){
        this.sling.bodyA = bodyA;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke("#301608");
            if(pointA.x > 220){
                image(this.image3,pointA.x+20,pointA.y);
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y-40);
                line(pointA.x+20, pointA.y, pointB.x+27, pointB.y-40);
            }
            else{
                image(this.image3,pointA.x-20,pointA.y);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y-40);
                line(pointA.x-20, pointA.y, pointB.x+27, pointB.y-40);
            }
            
        }

        image(this.image1,200,25);
        image(this.image2,170,22);
    }
    
}