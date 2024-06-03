def removedup(arr):
    left = 1
    for right in range(len(arr)):
        if arr[right] != arr[right-1]:
            arr[left] = arr[right]
            left+=1
    return left