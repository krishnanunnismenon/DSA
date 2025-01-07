function quickSort(arr){

    if(arr.length<2){
        return arr
    }//base case

    let pivot = arr[arr.length-1]
    let j = arr.length - 2

    let greaterArr = []
    let lesserArr = []
    while(j>=0){
        if(arr[j]>pivot){
            greaterArr.push(arr[j])
        }else{
            lesserArr.push(arr[j])
        }
        j--
    }

    return [...quickSort(greaterArr),pivot,...quickSort(lesserArr)]
}

const arr = [8,20,-2,4,-6];
console.log(quickSort(arr))

 