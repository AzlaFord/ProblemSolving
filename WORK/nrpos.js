function negativpozi(arr){
    let nrpos = 0
    let nrneg = 0
    let sumpos =0
    let sumneg = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            nrneg++;
            sumneg += arr[i]
        }
        if(arr[i]>0){
            nrpos++;
            sumpos += arr[i]
        }

    }
    return [sumpos,sumneg,nrneg,nrpos];
}
console.log(negativpozi([1,-2,4,-6,7,-1,3]))
