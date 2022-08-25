function allLongestStrings(inputArray=[]){
    let Max=inputArray[0].length
    for(let i=1;i<inputArray.length;i++){
        Max=(Max<inputArray[i].length)?inputArray[i].length:Max
    }
    arr=[]
    for(i of inputArray){
        if(i.length==Max){
            arr.push(i)
        }
    }
    return arr
}

arr = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]

console.log(allLongestStrings(arr))