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
    }
})
console.log(indexJan)


// const numery =  new Array()
// numery.push(1, 15, 150, 1500, 5525)
// console.log(numery)

// const imiona = new Array()
// imiona.push("Jan", "Henryk")
// console.log(imiona)


let num = []
let name = new Array()

arr.forEach(item => {
    if(typeof item === Number) {
        Number.push(item)
    }
    else{
        name.push(item)
    }
})



const obj = {
    name: "Jan",
    age: 12
}

console.log(obj.name)

const arrWithObj = [obj]
console.log(arrWithObj[0].name)
