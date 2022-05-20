var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head.next, fast = head.next.next
    while(slow != fast) {
        if(!fast || !fast.next) return false
        slow = slow.next
        fast = fast.next.next  //只有fast.next不为空的时候，fast.next.next才存在
    } 
    return true
};