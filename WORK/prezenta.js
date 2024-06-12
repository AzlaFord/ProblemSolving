function presence(arr) {
    let obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]]++;  
        } else {
            obj[arr[i]] = 1;  
        }
    }
    return obj;
}
let array = [4, 4, 6, 6, 6, 7, 8, 4, 8];
let rezultat = presence(array);
console.log(rezultat); // va afișa { '4': 3, '6': 3, '7': 1, '8': 2 }
