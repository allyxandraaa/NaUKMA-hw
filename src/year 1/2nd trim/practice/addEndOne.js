function addEndOne(x){
    let condition = true;  
    let rules = {
        "#a" : "a|a",
        "#b" : "b|b",
        "|aa" : "a|a",
        "|bb" : "b|b",
        "|ab" : "b|a",
        "|ba" : "a|b",
        "|a" : "a.",
        "|b" : "b.",
        "" : "#"
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