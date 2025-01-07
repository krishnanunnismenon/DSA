const arr1 = [1,2,3]

const arr2 = [4,5]

const cartisianProduct = []


for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        cartisianProduct.push([arr1[i],arr2[j]])
    }
}

console.log(cartisianProduct)

//BigO = O(m*n)