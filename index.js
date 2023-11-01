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

// console.log(tutorials);

// create a function titleCased that takes no arguments and returns an array of tutorial titles with the first letter of every word capitalized.
const titleCased = () => {
  let newTutorials = tutorials.map((title) => {
    // iterate over the titles
    let newTitle = title.split(' ').map((word) => {
      // split the title into an array of words
      // iterate over the words
      let newWord = word[0].toUpperCase() + word.substring(1);
      return (newWord);
    });
    // join the array of words with a space between each word
    return newTitle.join(' ');
  });
  return newTutorials;
}

console.log(titleCased());
