function recurssiveFactorial(n){
    if(n===0){
        return 1
    }
    
    return n* recurssiveFactorial(n-1) 
}

console.log(recurssiveFactorial(5));

// BigO == O(n)