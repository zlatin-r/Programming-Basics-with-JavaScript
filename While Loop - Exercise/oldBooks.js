function oldBooks(input) {
    let index = 0;
    let searchedBook = input[index];
    index++;
    let currentBook = input[index];
    index++;
    let bookCounter = 0
    let found = false;
    
    while (currentBook !== "No More Books") {
        

        if (currentBook == searchedBook) {
            found = true;
            break;
        }
        currentBook = input[index];
        bookCounter++;
        index++;
        }

    if (found) {
        console.log(`You checked ${bookCounter} books and found it.`);
    } else {
        console.log("The book you search is not here!")
        console.log(`You checked ${bookCounter} books.`)
    }
}   

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])