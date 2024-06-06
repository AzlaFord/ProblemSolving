def addBinary(a,b):
    res = ''
    carry = 0
    a,b = a[::-1],b[::-1]
    for i in range((max(len(a)),max(len(b)))):
        digita = ord(a[i]) - ord('0') if len(a[i]) else 0
        digitb = ord(b[i]) - ord('0') if len(b[i]) else 0
        total = digita + digitb + carry
        char = str(total % 2)
        res = char + res
        carry = total //2
    
    if carry:
        res = '1' + res
    return res
