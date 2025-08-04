let str="jajdn fje2 0oe ejndkecnj dj8!nfwoej@5f iwnfj#$dv4055k8n sjldfeo";
let vowels = 'aeiouAEIOU';
let vowelCount = 0;
let consonantCount = 0;

for (let char of str) {
  if (/[a-zA-Z]/.test(char)) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}
console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);