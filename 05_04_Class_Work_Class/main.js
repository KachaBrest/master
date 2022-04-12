class Figure {
    constructor(x , y) {
        this.name = 'Figure';
        this.x = x;
        this.y = y;
    }
    
    draw (x,y) {
        console.log(('${this.name} x:${this.x}, y:${this.y}'))
    }
    
    area(){
        return 0
    }

    perimeter(){
        return 0;
    }

};

class Rectangle extends Figure {
    constructor(x, y, a, b) {
        super(x, y);
        this.name = 'Rectangle';
        this.a = a;
        this.b = b;
        console.log(draw);
    };

    area(){
        return this.a * this.b;
    }

    perimeter(){
        return (this.a+this.b)*2;
    }
    
};

class Square extends Rectangle{
    constructor(x, y, a) {
        super(x, y, a,a);
        this.name = 'Square';
    };
};

class Circle extends Figure{
    constructor(x,y,r){
        super(x,y);
        this.r = r;
        this.name = 'Circle'
    }
    area(){
        return Math.PI*this.r**2;
    }
    perimeter(){
        return 2*Math.PI*this.r;
    }
};

const figures = [new Figure(1,2), new Rectangle(1,2,4,8), new Square(1,2,12), new Circle(1,2,5)];
figures.forEach(f => console.log(f.area()));