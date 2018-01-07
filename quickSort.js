const t = require('./array/arrayForSort');

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const item = arr[0];
  const left = arr.filter((value, index) => {
    if (value < item) return true;
  });
  const right = arr.filter((value, index) => {
    if (value > item) return true;
  });
  return quickSort(left).concat(item, quickSort(right));
}

console.log(quickSort(t.arr1));
console.log(quickSort(t.arrOneValue));
console.log(quickSort(t.arrEmpty));
