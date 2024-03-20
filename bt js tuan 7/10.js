function cube (width) {
    var cubeObject = square (width);
    var squareArea = cubeObject.getArea;
    cubeObject.getVolume = function () {
    if (width>0) return squareArea () * width;
    }
    cubeObject.getArea = function (){
        if (width>0) return squareArea ()*6;
    }
    return cubeObject;
}
var myCube = cube (5);
document.write (myCube.getArea () + "<br/>");
document.write (myCube.getVolume () + "<br/>");
function square (width) {
var squareobject = {};
squareObject.getArea = function () {
if (width>0) return width*width;
}
return squareObject;
}
var myBox = square (5);
document.write (myBox.getArea () + "<br/>");
document.write (myBox.width + "<br/>");