// Let's create shaped objects

// Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
// Write a function called circle_area that returns the area of the object. 
// Write a function total_sides that returns the number of sides of the object.
// Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
// Write a function called rectangle_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.
// Define a new class called Square with appropriate attributes and instantiate a few Square objects.
// Write a function called square_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.

class Circle {
    constructor(diameter) {
        this.diameter = diameter,
        this.radius = diameter/2
        this.circumference = Math.PI * diameter;
        this.sides = 0;
    }

    circle_area() {
        area = (Math.PI * Math.pow(this.radius, 2));
        console.log(area);
    }

    total_sides() {
        console.log(`A circle has ${this.sides} sides`);
    }
}
const circle = new Circle(4);
const circle2 = new Circle(9);
const circle3 = new Circle(22);

class Rectangle {
    constructor(length, width) {
        this.length = length,
        this.width = width,
        this.sides = 4
    }
    rectangle_area() {
        console.log(this.length * this.width);
    }
    total_sides() {
        console.log(`A rectangle has ${this.sides} sides`)
    }
}
const rectangle =  new Rectangle(3, 6);
const rectangle2 = new Rectangle(2, 8);
const rectangle3 = new Rectangle(7, 4);

class Square extends Rectangle {
    
    square_area() {
        this.rectangle_area();
    }
    square_sides() {
        this.total_sides();
    }
}
const square = new Square(5);
const square2 = new Square(4);
const square3 = new Square(12)