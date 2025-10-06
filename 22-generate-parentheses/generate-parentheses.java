class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> s = new ArrayList<>();

        dfs(0, 0, "", n, s);

        return s;
    }

    private void dfs(int openP, int closeP, String s, int n, List<String> res) {
        if(openP + closeP == n * 2){
            res.add(s);
            return;
        }

        if(openP < n){
            dfs(openP + 1, closeP, s + "(", n, res);
        }

        if(closeP < openP){
            dfs(openP, closeP + 1, s + ")", n, res);
        }
    }
}