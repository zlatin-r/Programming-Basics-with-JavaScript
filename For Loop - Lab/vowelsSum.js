function vowelsSum(input) {
    let text = input[0];
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        let ch = text[i];
        
        switch(ch){
            case ch = "a": sum += 1; break;
            case ch = "e": sum += 2; break;
            case ch = "i": sum += 3; break;
            case ch = "o": sum += 4; break;
            case ch = "u": sum += 5; break;
        }
    }
    console.log(sum);
}

vowelsSum(["hello"])