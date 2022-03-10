// 1. Write a function that returns the sum of any two integers passed as arguments
function add(x,y) {
  let total = x + y;
  console.log(total);
  return total;
}

add (1,2);
// 2. Write a function that returns the difference of the second argument from the first
function subtract(x,y) {
  let difference = x - y;
  console.log (difference)
  return difference;
}

subtract(4,3);
// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`

function greet(username) {
  console.log (`Hello, ${username}!`);
  return username;
}

greet(`Homer`);
// 4. Write a function that returns the product of any argument
// multiplied by itself.
function square(x) {
  let product = x * x;
  console.log(product);
  return product;
}

square(15);

// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions
// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥

function area(l,w,h) {
  let volume = l*w*h;
  console.log (volume);
  return volume;
}

console.log (`The dimensions of the box are ${area(7,8,9)} cubic centimeters.`);
