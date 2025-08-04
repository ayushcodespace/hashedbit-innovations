function sumOfArray(arr)
{
    return arr.reduce((sum,e)=> sum+e, 0);
}
const a=[5,3,10,9,5,7];
console.log(sumOfArray(a));