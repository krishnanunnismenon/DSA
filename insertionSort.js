function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let numberToInsert = arr[i] //NTI
        let j = i - 1 ;

        while(j>=0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j=j-1
            
        }
        arr[j+1] = numberToInsert
        
    }   
}

const arr = [2,1,3,1,5,2,34,-12]

insertionSort(arr)

console.log(arr)

//bigO = O(n^2)