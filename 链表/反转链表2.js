// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

var reverseBetween = function(head, left, right) {
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;//虚拟头节点

    let pre = dummyNode;
    for (let i = 0; i < left - 1; i++) {//pre遍历到left的前一个节点
        pre = pre.next;
    }

    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {//rightNode遍历到right的位置
        rightNode = rightNode.next;
    }

    let leftNode = pre.next;//保存leftNode
    let curr = rightNode.next;//保存rightNode.next

  	//切断left到right的子链
    pre.next = null;
    rightNode.next = null;

		//206题的逻辑 反转left到right的子链
    reverseLinkedList(leftNode);

    //反向连接
    // pre.next是断链的前一个节点，前一个连上反转后的， 
    // leftNode.next反转前是断链的第一个节点，反转后就是最后一个节点，curr是断链的后一个节点，
    pre.next = rightNode;
    leftNode.next = curr;
    return dummyNode.next;
};

const reverseLinkedList = (head) => {
    let pre = null;
    let cur = head;

    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
}

