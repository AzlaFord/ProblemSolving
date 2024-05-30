function TwoSum(arr,target){
    let Hmap = {}
    for(let i=0; i<arr.length; i++){
        let diferenta = target -arr[i]
        if(diferenta in Hmap){
            return [Hmap[diferenta],i]
        }
        Hmap[arr[i]]= i

    }
    return null

}
console.log(TwoSum([5,6,7,8,9,10,1],6))