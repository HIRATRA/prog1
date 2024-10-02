//1. removeWords(original, wordsToRemove)

function removeWords(original, wordsToRemove) {
  let words = original.split(" ");
  let filteredWords = words.filter((word) => !wordsToRemove.includes(word));
  return filteredWords.join(" ");
}

console.log(removeWords("Hello, ceci est un test", ["ceci", "un"]));

console.log(removeWords("Hello b*tch", ["b*tch"]));
//je ne sais pas ce qu'est un tests unitaires mais voici quand meme une fonction qui enleve les mot dans le le tableau `wordsToRemove

//2. getMostPopularPlaces(places)

function getMostPopularPlaces(...places) {
  const count = {};

  places.forEach((place) => {
    count[place] = (count[place] || 0) + 1;
  });

  const sortedPlaces = Object.keys(count).sort((a, b) => count[b] - count[a]);

  return sortedPlaces[0] + ", " + sortedPlaces[1];
}
console.log(
  getMostPopularPlaces(
    "Analamahitsy",
    "Analamahitsy",
    "Itosy",
    "Behoririka",
    "Itosy",
    "Itosy"
  )
);
