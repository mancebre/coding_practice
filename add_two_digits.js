function addTwoDigits(n) {
    let s = n.toString();

    let result = 0;

    for (var i = 0; i < s.length; i++) {
        result += parseInt(s[i]);
    }

    return result;
}

console.log("37", addTwoDigits(37));