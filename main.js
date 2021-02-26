const arr = new Array(1, 15, 150, 1500, "Jan", 5525, "Henryk")

console.log(arr)


arr.forEach(item =>{
    console.log(item)
})


const wszystkieWiekszeOd1 = arr.every(item => item > 1)
console.log(wszystkieWiekszeOd1)


let indexJan
arr.find((item, index)=> {
    if(item === "Jan") {
        indexJan = index
        console.log(indexJan)
    }
})
