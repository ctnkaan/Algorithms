var isSquare = function(n){

  let sum;

  if (n === 0 || n === 1) {
      return true;
  }

  for(let i = 0; i < n; ++i) {
    sum = n / i;
    if (sum === i) {
      return true;
    }
  }


  return false; // fix me
}
