let temptitle = document.title;   //How to change uppercase title toLowercase.....
temptittle = temptitle==""?"Document":temptitle;
var i=0;
document.title = temptitle.split("").map((str) =>{
    if(temptitle[i]==str){
        i=undefined;
        return str.toUpperCase()
    }
    else{
        return str.toLowerCase();
    }
}).join("");