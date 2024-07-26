function analyzeSentence(sentence) {
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let isPreviousSpace = false;
  
    for (const char of sentence) {
      sentenceLength++;
  
      if (char === ' ' && !isPreviousSpace) {
        wordCount++;
      }
  
      isPreviousSpace = char === ' ';
  
      if (/[aeiouAEIOU]/.test(char)) {
        vowelCount++;
      }
    }
  
    return {
      sentenceLength,
      wordCount,
      vowelCount,
    };
  }
  
  const sentence = "This is a sample sentence.";
  const results = analyzeSentence(sentence);
  
  console.log("Sentence Length:", results.sentenceLength); 
  console.log("Word Count:", results.wordCount);        
  console.log("Vowel Count:", results.vowelCount);
  