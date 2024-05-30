

def ThreeSum(arr):
    result = []
    arr.sort()
    for index, value in enumerate(arr):
        if index > 0 and value == arr[index-1]:
            continue
        left,right = index + 1, len(arr)-1
        while left < right:
            threesum = value + arr[left] + arr[right]
            if threesum > 0:
                right -=1
            elif threesum < 0:
                left += 1
            else:
                result.append([value,arr[left],arr[right]])
                left += 1
                while arr[left] == arr[left-1] and left < right:
                    left +=1
    return result    
    

print(ThreeSum([-3,-3,-1,1,1,2,3,0]))