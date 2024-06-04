def lastword(string):
    i = len(string) -1
    length =0
    while string[i] == ' ':
        i-=1
    while i>=0 and string[i] == ' ':
        length += 1
        i-=1
    return length
