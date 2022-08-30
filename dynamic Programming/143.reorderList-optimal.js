// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

//LINK: https://leetcode.com/problems/reorder-list/

var reorderList = function(head) {
    //find middle of the node.
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }
    let mid = slow
    //reverseList
    const reverseList = (node, prev) => {
        if(!node) return prev
        const temp = node.next;
        node.next = prev;
        return reverseList(temp, node)
    }
     function reorder(l1, l2) {
        if(!l1 || !l2 || !l2.next) return l1;
        const temp = l1.next;
        l1.next = l2;
        l2.next = reorder(temp, l2.next);
        return l1;
    }
    mid = reverseList(mid, null); 
    return reorder(head, mid);
};