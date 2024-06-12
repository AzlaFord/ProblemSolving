function find(arr,target){
    var count = 0;
    var list = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] == target){
            count++;
            list.push(i)
        }
    }
    return list
}

console.log(find([1,3,4,3,8],3))