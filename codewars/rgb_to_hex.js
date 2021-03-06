/**
 The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

 The following are examples of expected output values:

 rgb(255, 255, 255) // returns FFFFFF
 rgb(255, 255, 300) // returns FFFFFF
 rgb(0,0,0) // returns 000000
 rgb(148, 0, 211) // returns 9400D3

 */

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