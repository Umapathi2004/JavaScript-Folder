var mergeTwoLists = function(list1, list2) {
        for(let num of list2){
            list1.push(num);
        }
        let result=list1.sort((num1,num2)=>{
             return num1-num2;
        })
        return result;
    };
    console.log(mergeTwoLists([1,2,4],[1,3,4]))
