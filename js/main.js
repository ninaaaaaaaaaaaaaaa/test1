const array = [2, 4, 7, 5, 4, 3, 8]

const a = array.filter(function (x, i, number) {
  return number.indexOf(x) === i;
});
console.log(a);

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
let whatYear = 2024;
if (leapYear(whatYear)){
  console.log(whatYear + '年は閏年です');
} else {
  console.log(whatYear + '年は閏年ではありません');
}