/**
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structure as the first array.

For example:
 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     

URL:https://www.codewars.com/kata/520446778469526ec0000001/train/javascript
 */

Array.prototype.sameStructureAs = function (other) {

    const one = this;
    const two = other;

    const loopTrought = (one, two) => {

        if(one.length !== two.length) {
            return false;
        }
        if(one.length === 0 && two.length === 0) {
            return true;
        }

        let counter = 0;
        for(let i in two) {
            counter++;

            // If is function skip.
            if(two[i] && {}.toString.call(two[i]) === '[object Function]') {
                continue;
            }

            if(
                (typeof two[i] !== "object" && typeof one[i] === "object") || 
                (typeof one[i] !== "object" && typeof two[i] === "object")
                ) {
                return false;
            }
            
            if(typeof two[i] === "object") {
                return loopTrought(one[i], two[i]);
            } else if (counter == one.length) {
                return true;
            }
        }
    }

    return loopTrought(one, two);
};

console.log([1,'[',']'].sameStructureAs( ['[',']',1] ));

// console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] )   );
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));
// console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));

// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

