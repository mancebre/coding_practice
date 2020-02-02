// Feel free to change this file however you want
class GettingDressed {
    constructor() {
        this.clotes = {
          1: "hat",
          2: "pants",
          3: "shirt",
          4: "shoes",
          5: "socks"
        }
    }
  
    dress(clothes) {
        let result = [];
        for(let itemKey in clothes) {
            console.log(this.clotes[clothes[itemKey]]);
            // You must put your socks on before your shoes.
            if(clothes[itemKey] == 4 && !clothes.includes(5)) {
                result.push('fail');
                return false;
            }
            //You must put your shirt on before your hat.
            if(clothes[itemKey] == 3 && !clothes.includes(1)) {
                result.push('fail');
                return false;
            }

            result.push(this.clotes[clothes[itemKey]]);
        }

        return result;
    }
  }

const gettingDressed = new GettingDressed();
  
console.log(gettingDressed.dress([5, 1]));