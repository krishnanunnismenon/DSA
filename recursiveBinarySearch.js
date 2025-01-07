


function recursiveBinarySearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length - 1
    
    
    function recurssion(){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        
        while(leftIndex<=rightIndex){
            if(arr[middleIndex] === target ){
                return middleIndex;
                
            }else if(arr[middleIndex]>target){
                rightIndex = middleIndex - 1;
                return recurssion()
            }else{
                leftIndex = middleIndex + 1;
                return recurssion()
            }
        }
        return -1
    }
    return recurssion()

}


const ans = recursiveBinarySearch([1,4,76,444,1234,123978],444)

console.log(ans)