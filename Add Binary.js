var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    console.log(BigInt(aBin),BigInt(bBin));
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
  };
console.log(addBinary("11","1"))
