def paratesis(str):
    parantezar =0
    parateneza = 0
    acolada =0
    for n in str:
        if n == '[':
            parateneza +=1
        elif n == ']':
            parateneza -=1
        elif n == ')':
            parantezar -=1
        elif n == '(':
            parantezar+=1
        elif n == '{':
            acolada +=1
        elif n == '}':
            acolada-=1
        else:
            return False
        if acolada <= -1 or parateneza <= -1 or parantezar <= -1:
            return False
    if acolada >= 1 or parateneza >= 1 or parantezar == 1:
            return False
    else:
        return True

print(paratesis( '{(({{{{{}}}}[[]]][[][]))}'))