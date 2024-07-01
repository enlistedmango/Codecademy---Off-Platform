/*

Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

*/

// My Submitted Solution

function agreeOrDisagree(first, second) {
    if (first == second) {
        return "You agree!";
    } else {
        return "You disagree!";
    }
}

console.log(agreeOrDisagree("yep", "yep"));
// Should print 'You agree!'
