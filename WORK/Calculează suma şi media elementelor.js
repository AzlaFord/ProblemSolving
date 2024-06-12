function sumasimedia(arr){
    let avg = 0;
    let sum = 0;

    for(var i = 0 ; i < arr.length; i++){
        sum += arr[i];
        avg += arr[i] ;
    }
    return [avg / arr.length, sum];
}

console.log(sumasimedia([5,2,7,6,5,3]));