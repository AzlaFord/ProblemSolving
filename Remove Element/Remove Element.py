def removenum(arr,nr):
    k = 0
    for i in range(len(arr)):
        if arr[i] != arr[k]:
            arr[k] = arr[i]
            k += 1
    return k