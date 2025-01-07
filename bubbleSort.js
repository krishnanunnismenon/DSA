const arr = [1,2,3,4,1,2,3,6,1,2]

let temp = 0

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            
            console.log(`i is greater ${arr}`)
        }else if(arr[i]<arr[j]){
            
            console.log(`j is greater ${arr}`)
        }
    }
}

console.log(arr)

//bigO = O(n^2)