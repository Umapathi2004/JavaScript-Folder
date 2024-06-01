/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let length=nums.length;
    let remove=[];
    let result=[];
    for(let i=0;i<length;i++){
        let temp=nums.pop();
        if(nums.includes(temp)){
            remove.push(temp)
            continue;
        }
        else{
            result.push(temp)
        }
    }
    for(let num of result){
        if(remove.includes(num)){
            continue;
        }
        else{
            return num;
        }
    }
   
};
console.log(singleNumber([4,1,2,1,2,3,3,4,8]))
