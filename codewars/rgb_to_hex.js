function rgb(r, g, b){
    return (componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
}

function componentToHex(c) {
    c = validateEntry(c);
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function validateEntry(c) {
    c = c < 0 ? 0 : c;
    c = c > 255 ? 255 : c;

    return c;
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -220));
console.log(rgb(300,255,255));
console.log(rgb(173,255,47));