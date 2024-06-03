def findtheindex(string,string2):
    if string2 == '':
        return 0
    for i in range(len(string)+1 - len(string2)):
        for j in range(len(string2)):
            if string[i+j] != string2[j]:
                break
            if j == len(string2) -1:
                return i
    return -1
