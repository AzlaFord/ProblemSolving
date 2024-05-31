def palidrome(num):
    if num < 0 : return False
    div = 1
    while num >= 10 * div:
        div *=10
    while num:
        right = num % 10
        left = num // div
        if left != right: return False
        num = (num % div) //10
        div = div / 100
    return True
