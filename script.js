//
// function getUp(alive, callback) {
//     if (alive) {
//         console.log("I got up")
//     }
//
//     setTimeout(() => {
//         callback(alive)
//     }, 1000)
//
// }
//
// function eatBreakfast(dish, callback) {
//     console.log(`I eated something today`)
//
//     setTimeout(() => {
//         callback(dish)
//     })
// }
//
// function brushTeeth(success, callback) {
//     console.log("I am trying to brush my teeth")
//
//     setTimeout(() => {
//         callback(success)
//     }, 2000)
// }
//
// function startWritingCourseWork(time, callback) {
//     console.log("It will be good if I try to write my course work")
//
//     setTimeout(() => {
//         if (time < 100) {
//             callback("You are picyk, the session will be hard", null)
//         } else {
//             callback(null, "All will be good, you will pass your exams")
//         }
//     }, 1000)
// }
//
// function startProgramming (createdNewFacebook, callback) {
//     console.log("Gonnna start programming")
//     setTimeout(() => {
//         callback(createdNewFacebook)
//     })
// }
//
// function eatLunch(dish, callback) {
//     console.log(`I want something for my lunch`)
//
//     setTimeout(() => {
//         callback(dish)
//     })
// }
//
// function goToBed(areTasksDone, callback) {
//     console.log("Checking if all the tasks for my day are done")
//
//     setTimeout(() => {
//         callback(areTasksDone)
//     })
// }
//
// getUp(true, (isAlive) => {
//     if (!isAlive) {
//         console.log("Unfortunately, you are dead :(")
//         return ;
//     }
//     eatBreakfast("borsch", (dish) => {
//         if (!dish) {
//             console.log("There is nothing to eat, go to the shop")
//             return ;
//         }
//         brushTeeth(true, (success) => {
//             if (success) {
//                 console.log("I have successfully brushed my teeth")
//             }
//
//             startWritingCourseWork(101, (err, data) => {
//                 if (err) {
//                     console.log(err)
//                     return ;
//                 }
//                 console.log(data)
//                 startProgramming(true, (created) => {
//                     if (!created) {
//                         console.log("It is a pity, you haven't created anything")
//                         return ;
//                     }
//                     console.log("Congratulations, you have created a new Facebook")
//                     eatLunch("buckwheat", (dish) => {
//                         if (!dish) {
//                             console.log("Unfortunately, there is no dish for you")
//                         }
//                         console.log("The " + dish + " was tasty")
//                         goToBed(false, (areTasksDone) => {
//                             if (!areTasksDone) {
//                                 console.log("The tasks weren't completed so we will code at night")
//                             }
//                             console.log("All the tasks were completed")
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// function getUp(alive) {
//     return new Promise((resolve, reject) => {
//         if (alive) {
//             console.log("I got up")
//         }
//
//         setTimeout(() => {
//             if (alive) {
//                 resolve("Yes, I am alive")
//             } else {
//                 reject("Unfortunately, I am already dead")
//             }
//         }, 1000)
//     })
// }
//
// function eatBreakfast(dish) {
//     return new Promise((resolve, reject) => {
//     console.log(`I eated something today`)
//
//     setTimeout(() => {
//         if (dish) {
//             resolve(`I have eated ${dish}`)
//         } else {
//             reject("There was nothing to eat")
//         }
//     })
//     })
// }
//
// function brushTeeth(success) {
//     return new Promise((resolve, reject) => {
//         console.log("I am trying to brush my teeth")
//
//         setTimeout(() => {
//             if (success) {
//                 resolve("Our endeavors were very successful")
//             } else {
//                 reject("Unfortunately, everything went bad")
//             }
//         }, 2000)
//     })
// }
//
// function startWritingCourseWork(time) {
//     return new Promise((resolve, reject) => {
//         console.log("It will be good if I try to write my course work")
//
//         setTimeout(() => {
//             if (time < 100) {
//                 reject("You are picyk, the session will be hard")
//             } else {
//                resolve("All will be good, you will pass your exams")
//             }
//         }, 1000)
//     })
// }
//
// function startProgramming (createdNewFacebook) {
//     return new Promise((resolve, reject) => {
//         console.log("Gonnna start programming")
//         setTimeout(() => {
//             if (createdNewFacebook) {
//                 resolve("You have created new Facebook");
//             } else {
//                 reject("Actually, we haven't created anything")
//             }
//         })
//     })
// }
//
// function eatLunch(dish) {
//     return new Promise((resolve, reject) => {
//         console.log(`I want something for my lunch`)
//
//         setTimeout(() => {
//             dish ? resolve(`We eated ${dish}`) : reject("We didn't eat anything")
//         })
//     })
// }
//
// function goToBed(areTasksDone) {
//     return new Promise((resolve, reject) => {
//         console.log("Checking if all the tasks for my day are done")
//
//         setTimeout(() => {
//             areTasksDone ? resolve("The tasks were done successfully") : reject("It is necessary to complete the tasks")
//         })
//     })
// }
// getUp(true)
//     .then(value => {
//         console.log(value)
//         return eatBreakfast("Borsch")
//     })
//     .then(value => {
//         console.log(value)
//         return brushTeeth(true)
//     })
//     .then(value => {
//         console.log(value)
//         return startWritingCourseWork(100)
//     })
//     .then(value => {
//         console.log(value)
//         return startProgramming(false)
//     })
//     .then(value => {
//         console.log(value)
//         return eatLunch("гречка")
//     })
//     .then(value => {
//         console.log(value)
//         return goToBed(false)
//     })
//     .then(value => {
//         console.log(value)
//     })
//     .catch(error => {
//         console.log(error)
//     })
// let maxPalindrome = -Infinity
// let simpleArray = []
// for (let i = 10000; i < 100000; i++) {
//     if (checkSimple(i)) simpleArray.push(i);
// }
//
// for (let i = 0; i < simpleArray.length; i++) {
//     for (let j = 0; j < simpleArray.length; j++) {
//         let number = simpleArray[i] * simpleArray[j]
//         if (checkPalindrome(number) && number > maxPalindrome) {
//             console.log(simpleArray[i], simpleArray[j])
//             maxPalindrome = number
//         }
//     }
// }
//
// console.log(maxPalindrome)
//
// function checkSimple(number) {
//     for (let i = 2; i < Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return 0
//         }
//     }
//     return number
// }
//
// function checkPalindrome(number) {
//     let string = String(number)
//     let reversedString = string.split("").reverse().join('')
//     return number === Number(reversedString)
// }


// отсортировать с помощью setTimeout() массив  чисел [4,1,3,2,5] -> [1,2,3,4,5] (массив может быть любой длины)
// условие: нельзя пользоваться методами массивов
// array = [4, 1, 3, 2, 5]
// sorted_array = []
// array.forEach((i) => {
//     setTimeout(() => {
//         sorted_array.push(i)
//     }, i * 1000)
// })
// setTimeout(() => {
//     console.log(sorted_array)
// }, 7000)

// Timer for page
// let span = document.getElementById("number")
// let interval = setInterval(() => {
//     if (Number(span.innerText) > 0) {
//         span.innerText = String(Number(span.innerText) - 1)
//     } else {
//         clearInterval(interval)
//     }
// }, 10000)



// Реалізувати друкарську машинку.
//     У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
let element = document.getElementsByClassName('print')[0]
let word = "Hello my name is Ruslan and I love programming :))))"
printWithDelay(element, word)
async function printWithDelay(element, word) {
    let array = word.split("")
    console.log(array)
    for (let letter of array) {
        await checkLetter(element, letter).then(value => console.log(value))
    }
}

function checkLetter(element, letter) {
    return new Promise((resolve, reject) => {
        let random = Math.random()
        setTimeout(() => {
            element.innerHTML += letter
            resolve("success")
        }, random * 1000)
    })
}










