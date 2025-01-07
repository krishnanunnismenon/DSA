function fibonacci(n){
    const arr = [0,1]
    
    for(let i=2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr
}

console.log(fibonacci(2))

//big O = O(n)