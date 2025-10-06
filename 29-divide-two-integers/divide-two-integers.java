class Solution {
    public int divide(int dividend, int divisor) {
        if(dividend == divisor) return 1;
        if(dividend == Integer.MIN_VALUE && divisor == -1) return Integer.MAX_VALUE;
        int res = 0;
        if(divisor == 1) return dividend;
        if(divisor == -1) return -dividend;
        boolean sign = (dividend < 0) != (divisor < 0);

        int a = (dividend < 0) ? -dividend : dividend;
        int b = (divisor < 0) ? -divisor : divisor;
        while(a -  b >= 0){
            res++;
            a -= b;
        }

        return sign ? -res : res;
    }
}