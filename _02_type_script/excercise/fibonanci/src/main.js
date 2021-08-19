var fibo = function (n) {
    if (n <= 1)
        return n;
    return fibo(n - 1) + fibo(n - 2);
};
var sum = function (num) {
    var sum = 0;
    var current = 1;
    var next = 0;
    for (var i = 0; i < num; i++) {
        next = current + fibo(i);
        current = next;
        sum = sum + current;
        console.log(next);
    }
    return sum;
};
console.log("tổng các số fibo trong dãy là: "+sum(5));
