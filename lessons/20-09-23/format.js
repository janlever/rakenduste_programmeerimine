// string to number

let actuallyNumber = "1"
console.log(parseInt(actuallyNumber))
console.log(+actuallyNumber)

//promise, async/await
;(async () => {
  const myPromise = () =>
    new Promise(resolve =>
      setTimeout(() => resolve("myPromise() resolved in 100ms"), 100)
    )
  const myPromise2 = new Promise(resolve =>
    setTimeout(() => resolve("myPromise2 resolved in 200ms"), 200)
  )

  const asyncAwait = async () => {
    const myPromiseResponse = await myPromise()
    const myPromiseResponse2 = await myPromise2

    return { myPromiseResponse, myPromiseResponse2 }
  }
  console.log(await asyncAwait())
})()

const array = () => [1, 2, 3, 4, 5, 66]
a = array[5]
console.log(a)

//array deconstruction
const deconstruct = () => {
  const [, , , , , b] = array()
  return { b }
  console.log(deconstruct())
}

const raimo = {
  name: "Raimo",
  school: "TLU"
}
console.log(raimo.name + " " + raimo.school)
