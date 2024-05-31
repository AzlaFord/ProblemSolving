function Maximum_Subarray(arr){
    var maxSub = arr[0]
    var curSub = 0
    for(var i = 1; i < arr.length; i++){
        if(curSub < 0){
            curSub = 0
        }
        curSub += arr[i]
        
        maxSub = Math.max(maxSub, curSub)

    }
    return maxSub
}
console.log(Maximum_Subarray([-2,1,-3,4,-1,2,1,-5,4]))