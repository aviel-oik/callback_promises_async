// function getMessaage() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello from promise")
//         }, 500)
//     })
// }

// getMessaage().then(msg => console.log(msg))
// console.log("This runs first")

// function getRandomNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const num = Math.floor(Math.random() * 10)
//             resolve(num)
//         }, 700)
//     })
// }

// getRandomNumber().then(number => {
//     console.log("Random number:", number)
// })
// console.log("End of main.js")


// function loadConfig() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({ mode: "dev" })
//         }, 700)
//     })
// }

// loadConfig()
//     .then(value => console.log(value))
//     .then(value => console.log(value))
//     .catch(value => console.log(value))



// function double(n) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(n * 2)
//         }, 400)
//     })
// }

// function square(n) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(n * n)
//         }, 400)
//     })
// }

// double(3).then(result => console.log(square(result).then(res => res)))


// square(3).then(finalValue => console.log(finalValue))
// .catch(errrors => console.log(errrors))







// Create a function waitForHello() that:
// Uses an internal Promise that resolves "Hello" after 500 ms.
// await the Promise.
// Print the result.
// Call waitForHello().

function waitForHello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello")
        }, 500)
    })
}
async function callWaitForHello() {
    const result = await waitForHello()
    console.log(result)
}
callWaitForHello()