function printResult(){
  var frameWidth = 0;
  var longestWordLength = 0;
  var asterisk = '*';
  var linebreak = document.createElement("br");
  var space = '&nbsp;';

  // get input and remove all possible html tags
  var input = stripHTML(document.getElementById("input").value);
  // get the result element (div) where the output will be printed
  var resultElement = document.getElementById("result");

  //clear possible previous results
  resultElement.innerHTML = "";

  // split input to words array
  words = input.split(' ');
  // get the longest word from input
  longestWordLength = getLongestWordLength(words);
  frameWidth = longestWordLength + 4;

  // create top frame
  resultElement.innerHTML += asterisk.repeat(frameWidth);
  resultElement.appendChild(linebreak);

  for (var i = 0; i < words.length; i++)
  {
    var currentWord = words[i];
    var currentWordLength = currentWord.length;
    var spacesTillFrame = (longestWordLength - currentWordLength) === 0 ? 1 : (longestWordLength - currentWordLength + 1);

    resultElement.innerHTML += asterisk + space + currentWord + space.repeat(spacesTillFrame) + asterisk;
    resultElement.appendChild(linebreak);
  }
  // create bottom frame
  resultElement.innerHTML += asterisk.repeat(frameWidth);
}

function getLongestWordLength(words)
{
  var longestWord = words[0];

  for (var i = 1; i < words.length; i++){
    if (words[i].length > longestWord.length){
      longestWord = words[i];
    }
  }

  return longestWord.length;
}

// Removes html tags incase of xss
function stripHTML(html){
   var doc = new DOMParser().parseFromString(html, 'text/html');
   return doc.body.textContent || "";
}
