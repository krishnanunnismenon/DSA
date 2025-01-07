const powerOfTwo = (n)=>{
    let total = 2
    
    while(total<=n){
        if(total===n){
            return true
        }
        total *= 2
        
        
    }
    return false
}

console.log(powerOfTwo(30))

//BigO = O(logn)