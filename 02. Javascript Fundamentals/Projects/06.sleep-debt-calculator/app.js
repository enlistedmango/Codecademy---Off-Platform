/* This is no longer needed because we rewrote the function on line 40
const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            return 9;
            break;
        case 'Tuesday':
            return 7;
            break;
        case 'Wednesday':
            return 8;
            break;
        case 'Thursday':
            return 8;
            break;
        case 'Friday':
            return 8;
            break;
        case 'Saturday':
            return 7;
            break;
        case 'Sunday':
            return 7;
            break;
        default:
            return 'You need 8 Hours!'
    }
};
*/

/* Initially wwritten function
const getActualSleepHours = () => getSleepHours('Monday') + 
getSleepHours('Tuesday') + getSleepHours('Wednesday') +
getSleepHours('Thursday') + getSleepHours('Friday') +
getSleepHours('Saturday') + getSleepHours('Sunday');
*/

// Rewritten function
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

/* Initially written function
const getIdealSleepHours = () => {
    const idealHours = 6
    return idealHours * 7;
};
*/

// Rewritten function
const getIdealSleepHours = (idealHours) => idealHours * 7;

// So I initially put return console.log within the if statement, why do I not need the return?
// instead it just outputs to the console :/

/*
To make this calculator more helpful, 
add the hours the user is over or under their ideal sleep in each log statement in 
calculateSleepDebt().
*/

// I struggled with remembering how to do the above
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);

    if (actualSleepHours === idealSleepHours) {
        console.log("You got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
        console.log(
            "You got " +
                (idealSleepHours - actualSleepHours) +
                " Hour(s) more sleep than you needed this week. Smashing it!"
        );
    } else
        console.log(
            "You got " +
                (idealSleepHours - actualSleepHours) +
                " Hour(s) less sleep than you needed this week. Sleep goddammit!"
        );
};

calculateSleepDebt();

/*
this was a harder one to complete this time around, I tackled writing these for a while before
having to look at the solutions. Once I saw the solution it all made sense. Unsure if it was the wording of the task...
*/
