def TwoSum(arr,target):
    Hmap = {}
    for index,numar in enumerate(arr):
        diferenta = target - numar
        if diferenta in Hmap:
            return [Hmap[diferenta],index]
        Hmap[numar] = index 



print(TwoSum([6,6,7,1,2,5,],11))
