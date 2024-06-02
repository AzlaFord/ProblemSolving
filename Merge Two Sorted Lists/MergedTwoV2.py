def MergeTwo(arr1,arr2):
    merged_list = []
    i,j = 0,0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            merged_list.append(arr1[i])
            i+=1
        else:
            merged_list.append(arr2[j])
            j+=1
        while i < len(arr1):
            merged_list.append(arr1[i])
            i+=1
        while j < len(arr2):
            merged_list.append(arr2[j])
            j+=1
        return merged_list