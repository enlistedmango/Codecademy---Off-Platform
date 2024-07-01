// This is the Kelvin variable and it will not change
const kelvin = 0;

// This will convert the above kelvin to celcius
const celsius = kelvin - 273;

// This will calculate fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// The below will round down the math
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

/*
This was my way to convert newton to celsius
newton = celsius *(33/100);
console.log(Math.floor(newton));
*/

// This was the hint from the given example.
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
