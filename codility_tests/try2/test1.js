/*
Days of the week are represented as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun").

Write a function solution that, given a string S representing the day of the week and an intiger K
(between 0 and 500, inclusive), returns the day of the week that is K days later.

For example, given s = "wed" and K = 2, the function should return "Fri".
Given S = "Sat" and K = 23, the function should retutn "Mon".
*/

function solution(S, K) {
    let weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    if(K < 0 || K > 500) {
        return false;
    }
    if(weekDays.indexOf(S) === -1) {
        return false;
    }

    let weekDayKey = weekDays.indexOf(S);

    if(K > weekDays.length) {
        let resultKey = weekDayKey + (K % weekDays.length);
        if (resultKey >= weekDays.length) {
            resultKey = resultKey - weekDays.length;
        }

        return weekDays[resultKey];
    } else {
        return weekDays[weekDayKey + K];
    }
}

console.log(solution("Wed", 2));
console.log(solution("Sat", 23));
console.log(solution("Sat", 58));