console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

/*const promise = new Promise((resolve, reject) => {
    console.log("Promise is created")
})
console.log(promise)*/
//Promise is created
// Promise{<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
/*
const promise2 = new Promise((resolve, reject) => {
    resolve (
        console.log('Promise Data')
    )
})
promise2.then((response) => {
    console.log(response)
})
console.log(promise2)
*/


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
/*
const promise3 = new Promise((resolve, reject) => {
    reject (
        console.log('Promise Error')
    )
})
promise3.catch((response) => {
    console.log('err', response)
})
console.log(promise3)
*/

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
/*
const promise4 = new Promise((resolve, reject) => {
    setTimeout((response) => {
        if (response.status >= 200 && response.status < 400) {
            resolve(response.body)
        } else {
            reject(response.error)
        }
    }, 3000, {status: 200, body: {data: 'Promise Data'}, error: ''})
})
promise4.catch((response) => {
    console.log('err', response)
})
console.log(promise4)*/
// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type handlePromiseType = {
    promise: null | Promise<any>,
    resolve: null | Function,
    reject: null | Function,
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}
const handlePromise: handlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: (paramName: string) => {
        console.log(`Promise is rejected with error: ${paramName}`)
    }
}
export const createPromise = () => {
    const somePromise: Promise<any> = new Promise((resolve, reject) => {
        handlePromise.resolve = resolve
        handlePromise.reject = reject
    })
    handlePromise.promise = somePromise
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError)

    // @ts-ignore
    window.promObj = handlePromise
}
export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve('ok')
}
export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject('oh, no')
}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}


// just a plug
export default () => {
};