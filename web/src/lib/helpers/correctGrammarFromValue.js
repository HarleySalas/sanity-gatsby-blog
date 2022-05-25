const correctGrammarFromValue = (value, wordA, wordB, wordC) => {
  let word;

  //get an array of numbers from the value provided (ex, 1, or 2-3)
  let numbers = value.split("-").map((str) => {
    return Number(str);
  });

  if (numbers.includes(1)) {
    word = wordA;
  }

  if (numbers.some((val) => val > 1 && val < 5)) {
    word = wordB;
  }

  if (numbers.some((val) => val > 4)) {
    word = wordC;
  }

  return word;
};

export default correctGrammarFromValue;
