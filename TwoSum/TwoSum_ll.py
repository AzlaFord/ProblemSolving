def TwoSumll(arr,target):
    left = 0
    right = len(arr) -1
    while left < right:
        curentsum = arr[left] + arr[right]
        if curentsum > target:
            right-=1
        elif curentsum < target:
            left+=1
        else:
            return [left+1,right+1]
        

print(TwoSumll([1,2,3,4,5,6,11,16,233,123,123],9))