/*
THE TASK

Write a function, finalGrade(). It should:

- take three arguments of type number
- find the average of those three numbers
- return the letter grade (as a string) that the average corresponds to
- return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100

0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
*/

// Original Written Function
// function finalGrade(grade1, grade2, grade3) {
//     if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
//         return "You have entered an invalid grade";
//     }

//     let averageGrade = (grade1 + grade2 + grade3) / 3;

//     switch (true) {
//         case averageGrade < 59:
//             return "F";
//         case averageGrade < 69:
//             return "D";
//         case averageGrade < 79:
//             return "C";
//         case averageGrade < 89:
//             return "B";
//         case averageGrade < 100:
//             return "A";
//         default:
//             return "senior citizen";
//     }
// }

//Alternative Function
function finalGrade(grade1, grade2, grade3) {
    const grades = [grade1, grade2, grade3];
    const isValid = grades.every((grade) => grade >= 0 && grade <= 100);

    if (!isValid) {
        return "You have entered an invalid grade";
    }

    const averageGrade = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

    if (averageGrade < 59) {
        return "F";
    } else if (averageGrade < 69) {
        return "D";
    } else if (averageGrade < 79) {
        return "C";
    } else if (averageGrade < 89) {
        return "B";
    } else if (averageGrade <= 100) {
        return "A";
    } else {
        return "senior citizen"; // This case should never be reached with the given constraints
    }
}

console.log(finalGrade(100, 50, 95));
