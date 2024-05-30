function TwoSumll(arr,target){
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum < target){
            left+=1;
        }else if(sum > target){
            right-=1
        }else{
            return [left+1, right+1]
        }
        
    }
    return null
}

console.log(TwoSumll([1,2,3,4,5,6,7,11],9))