/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let firstNode = head;
    let secondNode = head;
    while(firstNode !== null){
        firstNode = firstNode.next;
        if(firstNode !== null){
            firstNode = firstNode.next;
            secondNode = secondNode.next;
        }
    }
    return secondNode;
};