/*
THE TASK

Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

*/

function lifePhase(age) {
    if (isNaN(age)) {
        return "Error - Not a Number";
    }

    if (age < 0 || age > 140) {
        return "This is not a valid age";
    }

    switch (true) {
        case age < 4:
            return "baby";
        case age < 13:
            return "child";
        case age < 20:
            return "teen";
        case age < 65:
            return "adult";
        default:
            return "senior citizen";
    }
}

console.log(lifePhase(5));
