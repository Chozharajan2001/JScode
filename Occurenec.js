//reduce function in JS
//counting the element occurence in the 2d Array using reduce function
let arr2d=[['a', 'b', 'c'], ['a', 'b', 'd'], ['c', 'd', 'b']];
console.log(arr2d);
let arr = arr2d.flat().reduce(
    (accumulator, value) => {
        if(accumulator[value]){
            accumulator[value]++;
        }
        else{
            accumulator[value] = 1;
        }
        return accumulator;
    }
    ,{})
console.log(arr)
// without reduce function
let a={};
let arr1=arr2d.flat();
for(i=0; i<arr1.length; i++){
    value=arr1[i];
    if(a[value]){
    a[value]++;
    }
    else{
        a[value] = 1;
    }
}
console.log(a)









