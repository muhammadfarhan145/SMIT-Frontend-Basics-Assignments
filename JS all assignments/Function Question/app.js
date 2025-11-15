  // first question 

function getsum (number){
    var sum = 0;
 for (var i = 0; i < number.length; i++){
    sum = total + number[i];
 }

 return sum;

}

// second question 

function reversestring( str){
    var reversed = "";
for (var i = str.length - 1; i >= 0; i-- ){
    reversed = reversed + str[i];
}

return reversed;
}

// third Question

function findLargest(arr) {
  var largest = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Fourth question

function countVowels(str) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    var character = str[i].toLowerCase();

    if (character === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      count++;
    }
  }

  return count;
}

// Fifth Question

function removeDuplicates(arr) {
  var uniqueArr = [];

  for (var i = 0; i < arr.length; i++) {
    var duplicate = false;

    for (var j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        duplicate = true;
        break;
      }
    }

    if (!duplicate) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

// Sixth Question

function capitalizeWords(sentence) {
  var words = sentence.split(" ");
  var result = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalized);
  }

  return result.join(" ");
}
