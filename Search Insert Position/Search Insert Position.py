def insertposition(arr,target):
    for i in range(len(arr)):
        if target <= arr[i] :
            return i
    return len(arr)            


print(insertposition([1,3,5,6], 2))