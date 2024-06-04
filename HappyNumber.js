function isHappy(n){
    if(n<=0){
        return false;
    }
  let temp=(n+"").split("");
  let added=0,count=0;
  while(true){
    for(let num of temp){
        added+=(num**2);
    }
    if(added==1){
        return true;
    }
    temp=(added+"").split("");
    added=0;
    if(count==10000){
        return false;
    }
    count++;
  }
}
console.log(isHappy(2))
