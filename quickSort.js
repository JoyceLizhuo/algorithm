function quickSort(arr){
    if (arr.length <= 1){
        return arr;
    }
    var item = arr[0];
    var left = arr.filter(function(value,index){
        if (value < item) return true;
    });
    var right = arr.filter(function(value,index){
        if (value > item) return true;
    });
    return quickSort(left).concat(item,quickSort(right));
}
// var arr = [2,4,1,5,9,0];
// console.log(quickSort(arr));