function celmaimic(arr){
    let mic = arr[0];
    let mare = arr[0]
    for(var i=0; i<arr.length; i++){
        if(arr[i] < mic){
            mic = arr[i]
        }
        if(arr[i] > mare){
            mare = arr[i]
        }

    }
    return [mare, mic]
}
console.log(celmaimic([3,5,8,6,2,7,10,11]))