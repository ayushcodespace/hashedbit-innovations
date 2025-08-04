function calculateArea(rectangle) {
  return rectangle.width * rectangle.height;
}
const rect={
    width:5,
    height:10
}
console.log("Area of rectangle:", calculateArea(rect));