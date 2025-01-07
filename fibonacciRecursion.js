

function recurssionFibonacci(n){
    if(n===1 || n===0) return n
    return recurssionFibonacci(n-1) + recurssionFibonacci(n-2)
}

console.log(recurssionFibonacci(5))

// BigO = O(2^n)