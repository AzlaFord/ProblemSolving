function removeitem(arr,nr){
    let k = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != nr){
            arr[k]=arr[i]
            k++;
        }
    }
    return k
}