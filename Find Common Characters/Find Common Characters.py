from collections import Counter

def findcommun(arr):
    cnt = Counter(arr[0])

    for w in arr:
        cur_cnt = Counter(w)
        for c in cnt:
            cnt[c] = min(cnt[c],cur_cnt)
    res = []
    for c in cnt:
        for i in range(len(cnt[c])):
            res.append(c)
    return res