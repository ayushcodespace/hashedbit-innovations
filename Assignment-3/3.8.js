function sumOfDigits(num)
{
    if(num<0)
    {
        return "Pleasse enter a positive number";
    }
    if(num<10)
    {
        return num;
    }
    else
    {
        let sum=0;
        while(num>0)
        {
            sum+=num%10;
            num=parseInt(num/10);
        }
        return sumOfDigits(sum);
    }
}
console.log(sumOfDigits(456));