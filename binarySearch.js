const arr = [1,2,3,4,5,6,7]

const req = 5



function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex<=rightIndex){
        const middleIndex = Math.floor((leftIndex+rightIndex)/2)

        if(arr[middleIndex]=== target){
            return middleIndex
        }else if(arr[middleIndex]>target){
            rightIndex = middleIndex-1;
        }else{
            leftIndex = middleIndex+1
        }
    }

    return -1
}

const ans = binarySearch([1,4,76,444,1234,123978],44)

console.log(ans)