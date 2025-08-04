let str="I love my India";
let strArray=str.split(" ");
strReverse="";
for(let i=0;i<strArray.length-1;i++)
{
    strReverse=" "+strArray[i]+strReverse;
}
strReverse=strArray[strArray.length-1]+strReverse;
console.log(strReverse);