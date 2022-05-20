// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

// 删除倒数第n个节点，需要求倒数第n+1个节点
var removeNthFromEnd = function (head, n) {
    let slow = head, fast = head
    // 快节点先前进n+1
    while (n) {
        fast = fast.next
        n--
    }
    while (fast) {
        slow = slow.next
        fast = fast.next
    }
    slow = slow.next.next
    return head
};