def Maximum_Subarray(arr):
    maxSub = arr[0]
    curSum = 0
    for n in arr:
        if curSum < 0:
            curSum = 0
        curSum += n
        maxSub = max(maxSub, curSum)
    return [maxSub]
print(Maximum_Subarray([-2,1,-3,4,-1,2,1,-5,4]))

