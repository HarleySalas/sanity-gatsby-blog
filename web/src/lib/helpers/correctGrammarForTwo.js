const correctGrammarForTwo = (value, wordA, wordB) => {
  let word;

  if (value < 2) {
    word = wordA;
  }

  if (value > 1) {
    word = wordB;
  }

  return word;
};

export default correctGrammarForTwo;
