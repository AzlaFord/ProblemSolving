def digits(arr):
    arr = arr[::-1]
    one = 1
    i = 0
    while one:
        if i <len(arr):
            if arr[i] == 9:
                arr[i] = 0
            else:
                arr[i] +=1
                one = 0
        else:
            arr.append(1)
            one=0
        i += 1
    return arr[::-1]
