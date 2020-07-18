const request = XMLHttpRequest();
const latinDictionaryLink =
  "https://www.math.ubc.ca/~cass/frivs/latin/latin-dict-full.html";
request.open("GET", latinDictionaryLink);
request.send();

let soup;

request.onStateChange = (data) => {
  soup = data;
};

console.log("soup", soup);

const wordsInLorem = [];
const numWordsInLorem = wordsInLorem.length;

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (maxWords - minWords) - minWords);
};

const loremWords = (minWords, maxWords) => {
  const numWords = randomNumberBetween(minWords, maxWords);

  const words = new Array(numWords);

  return words
    .map((w) => wordsInLorem[Math.floor(Math.random() * numWordsInLorem)])
    .join(" ");
};

const loremSentences = (
  numMinSentences,
  numMaxSentences,
  minWordsPerSentence,
  maxWordsPerSentence
) => {
  const numSentences = randomNumberBetween(numMinSentences, numMaxSentences);

  const sentences = new Array(numSentences);

  return sentences
    .map((s) => loremWords(minWordsPerSentence, maxWordsPerSentence))
    .join(". ");
};

const loremParagraphs = (
  numMinParagraphs,
  numMaxParagraphs,
  numMinSentences,
  numMaxSentences,
  minWordsPerSentence,
  maxWordsPerSentence
) => {
  const numParagraphs = randomNumberBetween(numMinParagraphs, numMaxParagraphs);

  const paragraphs = new Array(numParagraphs);

  return paragraphs
    .map((p) =>
      loremSentences(
        numMinSentences,
        numMaxSentences,
        minWordsPerSentence,
        maxWordsPerSentence
      )
    )
    .join("\n\n");
};
