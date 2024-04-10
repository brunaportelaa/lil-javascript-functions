//Solution 1, more readable
const add = (...theArgs) => theArgs.reduce((sum, val) => sum + val)
output = add(1,2,3,4,5);
console.log(output) //15

//Solution 2, more compact but far less readable
console.log([1,2,3,4,5].reduce((sum,val) => sum+val))