const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

console.log(tutorials);

const titleCased = () => {
  let newTutorials = tutorials.map((line) => {
    let newLine = line.split(' ').map((word) => {
      // console.log(word);
      let newWord = word[0].toUpperCase() + word.substring(1);
      // console.log(newWord)
      return (newWord);
    });
    // console.log(newLine);
    return newLine.join(' ');
  });
  return newTutorials;
}

console.log(titleCased());
