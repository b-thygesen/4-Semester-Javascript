class Shape {
    constructor(color) {
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
    toString() {
        return `color: ${this._color}`;
    }
    getColor(){
        return this._color;
    }
    setColor(color){
        this._color = color;
    }
}

shape1 = new Shape("orange");

console.log(shape1.getColor());
shape1.setColor("blue");
console.log(shape1.getColor());
console.log(shape1.toString());

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this._radius = radius;
    }

    getRadius(){
        return this._radius;
    }

    setRadius(radius){
        this._radius = radius;
    }
}

circle1 = new Circle("cyan", 20);
console.log(circle1.getColor());
console.log(circle1.getRadius());
circle1.setColor("yellow");
circle1.setRadius(15);
console.log(circle1.getColor());
console.log(circle1.getRadius());

class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius)
        this._height = height;
    }

    getVolume() {
        return undefined;
    }

    getHeight(){
        return this._height;
    }

    setHeight(height){
        this._height = height;
    }
}

cylinder1 = new Cylinder("black", 25, 5000);
console.log(cylinder1.getHeight());

function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length ?
      {value: array[nextIndex++], done: false} :
      {done: true};
    }
  }
}