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
 let prom = new Promise((resolve,reject)=>{
    setTimeout((response)=>{
        if (response.status>=200 && response.status<400 ) {
            resolve(response.body)
        }
        else {
            reject(response.error)
        }
    },200,{status:200,body:{data:'success'},error:''})
})


prom.then((response)=>{
    console.log(response)
})
console.log(prom)
// Promise{<pending>}
//undefined
//{data: 'success'}

// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug
export default ()=>{};