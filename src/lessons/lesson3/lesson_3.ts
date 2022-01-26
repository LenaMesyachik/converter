console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU
let prom = new Promise((resolve, reject) => {
    setTimeout((response) => {
        if (response.status >= 200 && response.status < 400) {
            resolve(response.body)
        } else {
            reject(response.error)
        }
    }, 200, {status: 200, body: {data: 'success'}, error: ''})
})


prom.then((response) => {
    console.log(response)
})
console.log(prom)
// Promise{<pending>}
//undefined
//{data: 'success'}


console.log(1)

let prom2 = new Promise((resolve, reject) => {
    console.log(2)
    setTimeout((response) => {
        console.log(3)
        if (response.status >= 200 && response.status < 400) {
            resolve(response.body)
            console.log('okey')
        } else {
            reject(response.error)
        }
    }, 200, {status: 200, body: {data: 'success'}, error: ''})
    console.log(4)
})


prom.then((response) => {
    console.log(response)
    console.log(6)
})
console.log(prom2)
console.log(5)

prom.then((response) => {
    console.log(response)
    console.log(6)
})
console.log(prom)
console.log(5)
// 1
// 2
// 4
// Promise {<pending>}
// 5
//undefined
// 3
// okey
// {data: 'success'}
// 6

console.log(1)

let prom3 = new Promise((resolve, reject) => {
    console.log(2)
    setTimeout((response) => {
        console.log(3)
        if (response.status >= 200 && response.status < 400) {
            resolve(response.body)
            console.log('okey')
        } else {
            reject(response.error)
        }
    }, 200, {status: 200, body: {data: 'success'}, error: ''})
    console.log(4)
})
prom.then((response) => {
    console.log(response)
    return 2
    console.log(6)
})
    .then((response2) => {
        console.log(response2)
    })

console.log(prom3)
console.log(5)
// 1
// 2
// 4
// Promise{<pending>}
// 5
undefined
//3
//okey
//{data: 'success'}
// 2
// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug
export default () => {
};