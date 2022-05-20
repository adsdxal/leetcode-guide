// 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
// 输出：2 -> 1 -> 9，即912

var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let head = new ListNode(0), p = head
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        p.next = new ListNode(sum % 10);
        p = p.next;
        carry = Math.floor(sum / 10);
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry > 0) {
        p.next = new ListNode(carry);
    }
    return head.next;
};