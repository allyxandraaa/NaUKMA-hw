function divide3Quotient(x){
    let condition = true;  
    let rules = {
      "a|||" : "|a",
      "a||" : ".",
      "a|" : ".",
      "a" : ".",
      "" : "a"
    }
    while(condition){
        for (let key in rules){
            if (x.indexOf(key, 0) != -1){
                x = x.replace(key, rules[key]);
                if (x.includes(".")){
                    x = x.replace(".", "");
                    condition = false;
                }
                break;
            }
        }
    }
    return x;
}

module.exports = divide3Quotient;

console.log(divide3Quotient("||||||||||||"));