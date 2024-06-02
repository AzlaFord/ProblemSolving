def MergeTwo(arr1,arr2):
    dummy = arr1
    tail = dummy
    while arr1 and arr2:
        if arr1.val < arr2.val:
            tail.next = arr1
            arr1 = arr1.next
        else:
            tail.next = arr2
            arr2 = arr2.next
        tail = tail.next
        if arr1:
            tail.next = arr1
        elif arr2:
            tail.next = arr2
        return dummy.next
