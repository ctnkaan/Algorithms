function disemvowel(str) {

  //a e i o u
  let temp = [];

  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== 'a' && str[i] !== 'A' && str[i] !== 'e' && str[i] !== 'E' && str[i] !== 'i' && str[i] !== 'I' && str[i] !== 'o' && str[i] !== 'O' && str[i] !== 'u' && str[i] !== 'U') {
      temp.push(str[i]);
    }
  }

  return temp.join('');
}
