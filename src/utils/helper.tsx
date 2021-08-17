export const copiedPhrases = (phraseArray: any) => {
  var input_phrases = '';
  phraseArray.forEach((element: any) => {
    input_phrases += element.title + ' ';
  });
  return input_phrases;
};
