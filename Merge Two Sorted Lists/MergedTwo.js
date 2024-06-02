function mergeTwo(arr1, arr2) {
    var merged = [];
    var i = 0;
    var j = 0;

    // Parcurgem ambele liste pana cand una dintre ele este epuizata
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Adaugam elementele ramase din arr1, daca exista
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    // Adaugam elementele ramase din arr2, daca exista
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    // Sortam lista rezultata
    merged.sort((a, b) => a - b);

    return merged;
}

console.log(mergeTwo([1, 5, 6, 7], [1, 4, 6, 2, 8])); // Output: [1, 1, 2, 4, 5, 6, 6, 7, 8]
