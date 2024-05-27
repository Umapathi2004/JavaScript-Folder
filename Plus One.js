function plusOne(digits) {
    const n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        digits[i] += 1;
        if (digits[i] < 10) {
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

console.log(plusOne([9, 9, 8])); 
