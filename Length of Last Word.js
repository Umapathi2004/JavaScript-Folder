var lengthOfLastWord = function(s) {
    let count=0;
    let temp=s.trim();
    for(let x=(temp.length-1);x>=0;x--){
        if(temp[x]!=" "){
            count+=1;
        }
        else{
            break;
        }
    }
    return count;
};
console.log(lengthOfLastWord("   fly me   to   the moons  "))