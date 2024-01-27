function transferIn10(x){
    let condition = true;  
    let rules = {
        "#|" : "#1",
        "9|" : "|0",
        "8|" : "9",
        "7|" : "8",
        "6|" : "7",
        "5|" : "6",
        "4|" : "5",
        "3|" : "4",
        "2|" : "3",
        "1|" : "2",
        "0|" : "1",
        "#" : ".",
        "" : "#0"
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
module.exports = transferIn10;