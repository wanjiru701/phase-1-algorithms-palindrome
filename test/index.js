function reverse(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverse(word);

  return word === reversedWord;
}