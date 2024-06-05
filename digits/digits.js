function digits(arr){
    arr= arr.reverse();
    let one = 1
    let i = 0
    while (one){
        if (i<arr.length){
            if(arr[i] == 9){
                arr[i] = 0

            }else{
                arr[i]+=1
                one =0
            }
        }
        else{
            arr.push(1)
            one = 0
        }
        i++;
    }
    return arr.reverse()
    
}