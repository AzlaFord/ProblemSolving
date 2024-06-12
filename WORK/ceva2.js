function reverse(arr){
    let range = arr.length-1
    for(let i = 0; i < range; i++){
        [arr[i], arr[range]] = [arr[range], arr[i]];
        range--
    }
    return arr
}

console.log(reverse([7,6,5,4,3,2,1]));