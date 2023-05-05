function encoded(str) {
  let arr = str.split(" ");
  return arr
    .map((word, index) =>
      word.length > 4 ? word.map((letter, i, array) => (letter = "*")) : word
    )
    .join(" ");
}
console.log(encoded("The code is fourty"));
