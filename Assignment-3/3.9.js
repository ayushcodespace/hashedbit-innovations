function countWords(paragraph) {
  let words = paragraph.trim().split(/\s+/);
  return words.length;
}
let para="Hello     \n   this is\ta\ttesting         paragraph\nsentence"
console.log(countWords(para));