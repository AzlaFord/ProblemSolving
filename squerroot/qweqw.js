function sqdqrt(nr){
    let left = 0
    let right = nr
    let res = 0
    while (left <= right){
        let m = left + Math.floor((right - left) / 2)
        if(m**2 > nr){
            left--;
        }else if(m**2 < right){
            left++;
            res = m
        }
        else{
            return m
        }
    }
    return res
}