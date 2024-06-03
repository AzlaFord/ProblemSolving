function removeit(arr){
    let left = 1
    for(let right = 1; right < arr.length; right++){
        if(arr[right] != arr[right - 1]){
            arr[left] = arr[right]
            left++;
        }
    }
    return left , arr
}

console.log(removeit([1,1,2]))