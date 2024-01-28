function clearEndOne(x){
    let condition = true;  
    let rules = {
        "|a" : "a|",
        "|b" : "b|",
        "b|" : ".",
        "a|" : ".",
        "" : "|"
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