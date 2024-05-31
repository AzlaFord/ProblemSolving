function ConvertRoman(string){
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    } 
    let rezultat = 0
    for(let i= 0 ; i<string.length ; i++){
        if(i+1 < string.length && roman[string[i]] < roman[string[i+1]]){
            rezultat -= roman[string[i]]
        }else{
            rezultat += roman[string[i]]
        }
        
    }
    return rezultat
}