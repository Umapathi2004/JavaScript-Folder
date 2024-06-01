let name="solomon";  //How to remove duplicate char in given string
    let tempname=name.split("")
    let length=tempname.length;
    let result=[];
    for (let i=0; i<length;i++){
    let currentIndex=tempname.pop();//solomo => n
    if(tempname.includes(currentIndex)){
    result.unshift('');
    }
    else{
    result.unshift(currentIndex);
    }
    }
    console.log(result.join(''))
