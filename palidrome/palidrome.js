function palidrome(x){
    if(x<0){
        return false
    }
    let div = 1
    while(x == div*10){
        div*=10
    }
    while(x){
        let right = div%10
        let left = x / div
        if(left != right){
            return false
        }
        x = (div % div) / 10
        div = div / 100
    }
    return true
}