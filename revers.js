function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator).reverse().join(" ");    
    console.log(arrayOfStrings);
}
splitString(`i'm have apple`, ' '); 
splitString(`i love teddy bear`, ' '); 
splitString(` Я изучаю JavaScript`, ' '); 