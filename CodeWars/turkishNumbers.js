const getTurkishNumber = (num) => {

  let arr = ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
  let arr2= ["filler", "on","yirmi","otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];

  console.log(num);

  if (num < 10) {
    return arr[num];
  } else {
    var reminder = num % 10; //22 *2
    var onluk = Math.floor(num / 10);

    console.log(onluk, reminder);

    onluk = arr2[onluk];

    reminder = arr[reminder];

    console.log(onluk, reminder);

    if (reminder !== 'sıfır')
      return ""+onluk+" "+reminder;

    else
      return onluk;
    // 46 reminder = 6   onluk =
  }

}
