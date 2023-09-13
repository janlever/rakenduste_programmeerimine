//luua array numbritega ja leida spetsiifilise numbri index

//function findMyIndex(array, element) {
//    const array = [1, 2, 3, 4, 5]

//    return array.indexOf(element)
//}

//console.log(findMyIndex(array, 4))

// function addNumbers(a, b) {
//     return a + b
// }
// console.log(addNumbers(4, 8))

// const arrowFunction = (num1, num2) => num1 + num2
// console.log(arrowFunction(5, 8))

// function addNumbers2(num1, num2) {
//     return function addNumbersHelper(num2){
//         return num1 + num2
//     }       
// }

//arrow function
const addNumbers = (num1) => (num2) => num1 + num2

console.log(addNumbers(3)(4))


// const nameJan = "Jan"
// const name = "name is ${nameJan}"

const nameStr = (name) => `Name is ${name}`
console.log(nameStr("Jan"))

const numberArray = [1, 2, 3, 4, 5]

// const newArray = numberArray.map((element, index, array) => {
//     console.log({
//         element : element,
//         newElement : element + 5,
//         "index" : index,
//         array
//     })
//     return element + 5
// })

const newArray = numberArray.map((n) => n + 5)
console.log(newArray)


// .map(() => {})

//Filter; filtreeri kõik elemendid mis on väiksemad kui 4

const filteredArray = numberArray.filter(element => element < 4)
console.log({ numberArray, filteredArray })

const names = ['Juku', 'Mari', 'Jaan', 'Anni']

const data = names.map((element) => {
    return {
        name: element,
        age: element.length + 10, 
        email: `${element}@company.com`, 
        address: `${element} street 123`,
        username: element.split("").reverse().join("") 
    }
})
console.log(data)

//tahan lisada jukule pikkuse juurde

const jukuPikkus = {
    ...data[0],          ///3 punkti spread syntax, ehk anna mulle see sealt ja paki mulle lahti. võta mingi vana objekt ja ma tahan sinna midagi juurde lisada
    height: 175
}
