/**
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not 
good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients 
(also an object) and returns the maximum number of cakes Pete can bake (integer). For 
simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are 
simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
 */

function cakes(recipe, available) {
    let result =[];

    for(item in recipe) {
        let howMeny = available[item] / recipe[item];
        result.push(isNaN(howMeny) ? 0 : howMeny);
    }

    let min = Math.min.apply(null, result);

    return Math.floor(min);
}


// recipe = {flour: 500, sugar: 200, eggs: 1};
// available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// console.log(cakes(recipe, available), 2);

recipe = {"eggs":10,"cream":17,"milk":95};
available = {"chocolate":9100,"milk":1500,"eggs":3200,"nuts":9200,"crumbles":3700,"butter":5100,"cocoa":4000,"sugar":9900,"cream":5900,"pears":9400,"oil":3700,"flour":1500,"apples":700};
console.log(cakes(recipe, available), 15);