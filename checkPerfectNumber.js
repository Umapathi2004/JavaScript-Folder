var checkPerfectNumber = function(num) {
    let temp=num;
    let condition=true;
    let result=0;
    let i=1;
    if(temp<=1){
          return false;
    }
    while(condition){
        if(temp%i==0){
            result+=i;
            if(result==temp){
                return true;
            }
        }
        if(result>temp){
            return false;
        }
        i++;
    }
    
};
console.log(checkPerfectNumber(28))
