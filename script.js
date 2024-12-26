function isFibonacci(num) {
    if (num < 0) {
        return false;
    }
    let a = 0, b = 1;
    while (b < num) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b === num;
}
