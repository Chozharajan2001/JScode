//Two Sum problem in JS
// array[1,3,2,5,7,6,9] target element is 14, output is [3,6]
let arr=[1,3,2,5,7,6,9];
let target=14;
function twoSum(arr, target){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        let val = target-arr[i];
        if(map.has(val)){
            return [map.get(val), i]
        }
        map.set(arr[i], i);
    }
}

let array = twoSum(arr,target);
console.log(array);

