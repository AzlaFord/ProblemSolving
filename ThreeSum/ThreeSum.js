function ThreeSum(arr) {
    let rezultat = [];
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue; // Dacă elementul este duplicat, sărim la următorul
        }

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let threeSum = arr[i] + arr[left] + arr[right];

            if (threeSum > 0) {
                right -= 1;
            } else if (threeSum < 0) {
                left += 1;
            } else {
                rezultat.push([arr[i], arr[left], arr[right]]);

                while (arr[left] === arr[left + 1]) {
                    left += 1;
                }
                while (arr[right] === arr[right - 1]) {
                    right -= 1;
                }
                left += 1;
                right -= 1;
            }
        }
    }
    console.log(rezultat);
    return rezultat;
}

console.log(ThreeSum([-3, -3, -1, 1, 1, 2, 3, 0]));
