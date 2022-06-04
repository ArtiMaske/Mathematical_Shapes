//Function to find the length of the diagonal of a square of a given side

let diagonal = function (s) {
    
    return Math.sqrt(2) * s;
}
console.log(`Diagonal of square is : ${diagonal(9).toFixed(4)}`);


// program to find the area of a triangle

let area = function (side1, side2, side3) {

    // calculate the semi-perimeter = half the sum of all its sides
    let s  = (side1 + side2 + side3) / 2;

    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    
}
console.log(`Area of Triangle : ${area(5, 6, 7).toFixed(4)}`);


//program to find the circumference and surface area of a circle
//The area of the circle is πr²

let areaOfCircle = function (r) {

    // r is radious of circle
    return Math.PI * r * r;

}
console.log(`Area of circle is:${areaOfCircle(4).toFixed(4)}`);

//The circumference of the circle is 2πr

let circumferenceOfCircle = function (r) {
    return 2 * Math.PI * r;
}
console.log(`Circumference of Circle is:${circumferenceOfCircle(4).toFixed(4)}`);