var strStr = function(haystack, needle) {
    let result;
    let needleLength=needle.length;
    if(haystack.includes(needle))
    for(let x=0;x<haystack.length;x++){
        let temp=haystack.slice(x,needleLength);
        if(temp.includes(needle)){
              result=x;
              break;
        }
        needleLength++
    }
    else{
        result=-1;
    }
    return result;
};
console.log(strStr("sdbutsd","s"));