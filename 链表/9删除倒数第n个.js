// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

var removeNthFromEnd = function(head, n) {
    // 找到倒数第n+1
    if(!head) return []
    let virtualNode = new ListNode(-1)
    virtualNode.next = head
    let fast = virtualNode, slow = virtualNode
    for(let i = 0; i < n + 1; i++) {
        fast = fast.next
    }
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return virtualNode.next
};