function solution(number){

  let sumArray = [];

  for (let i = 0; i < number; ++i) {
    if (i >= 3 && i % 3 === 0 || i % 5 === 0) {
      sumArray.push(i);
    }
  }

  let sum = 0;
  for (let i = 0; i < sumArray.length; ++i) {
    sum += sumArray[i];
  }

  return sum;

}
