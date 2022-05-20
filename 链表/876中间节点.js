var middleNode = function(head) {
    let slow = null, fast = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};