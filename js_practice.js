function Shape() { }

Shape.prototype.duplicate = function () {
    console.log('duplicate')
}

function Circle() { }

Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate();
    console.log('circle duplicate')
}

function Square() { }

Square.prototype.duplicate = function () {
    Shape.prototype.duplicate();
    console.log('square duplicate')

}

shapes = [

    new Square()
]

for (let shape of shapes)
    shape.duplicate();