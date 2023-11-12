function theMostPowerfulWord(input) {
    let index = 0;
    let word = input[index];
    index++;
    let max_sum = 0;
    let most_powerfull = "";
    let vowels = "aeiouyAEIOUY";

    while (word != "End of words") {
        let ascii_sum = 0;

        for (let i = 0; i < word.length; i++) {
            ascii_sum += word.charCodeAt(i);
        }
        if (vowels.includes(word[0])) {
            ascii_sum *= word.length;
        } else {
            ascii_sum = Math.floor(ascii_sum / word.length);
        }
        if (ascii_sum > max_sum) {
            max_sum = ascii_sum;
            most_powerfull = word;
        }

        word = input[index];
        index++;
    }
    console.log(`The most powerful word is ${most_powerfull} - ${max_sum}`);
}

theMostPowerfulWord(["The",
    "Most",
    "Powerful",
    "Word",
    "Is",
    "Experience",
    "End of words"])