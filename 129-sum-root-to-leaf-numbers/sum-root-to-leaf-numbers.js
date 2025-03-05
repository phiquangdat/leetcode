/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function dfs(node, sum){
    if(!node) return 0;
    if(!node.left && !node.right){
        return sum * 10 + node.val;
    }
    return dfs(node.left, sum * 10 + node.val) + dfs(node.right, sum * 10 + node.val);

}

var sumNumbers = function(root) {
    return dfs(root, 0);
};

root = [4,9,0,5,1]

console.log(sumNumbers(root));