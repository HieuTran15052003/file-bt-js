function findLongestWord(sentence) { let words = sentence.split(" "); let longestWord = "";

for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}

return longestWord;
}

let sentence = "Cô Thuy đẹp gái"; 
console.log(findLongestWord(sentence));