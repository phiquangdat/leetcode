/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
    let curr = head;
    let count = 0;
    let node = null;
    let prevNode = null;

    // Traverse the list to count its length
    while (curr !== null) {
        curr = curr.next;
        count++;
        if (count >= n) {
            if (!node) {
                node = head;
            } else {
                node = node.next;
                prevNode = prevNode ? prevNode.next : head;
            }
        }
    }

    // If node is null, we need to remove the head
    if (node === head) {
        head = head.next; // This handles the case when the list only has one node and we're removing it
    } else {
        prevNode.next = node.next; // Remove the node by linking the previous node to the next node
    }

    return head;
};