function prefix(arr) {
    let res = '';
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == arr[j].length || arr[j][i] != arr[0][i]) {
                return res;
            }
        }
        res += arr[0][i];
    }
    return res;
}
