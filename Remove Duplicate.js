var deleteDuplicates = function(head) {
    let result=[];
    let length=head.length;
    for(let n=0;n<length;n++){
        let temp=head.pop();
        if(head.includes(temp)){
            continue;
        }
        else{
            result.unshift(temp)
        }
    }
    return result;
};

console.log(deleteDuplicates([1,1,2,3,3]))
