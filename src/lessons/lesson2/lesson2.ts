console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9


// @ts-ignore
function curry(f) { // curry(f) выполняет каррирование

    // @ts-ignore
    return function (a) {

        // @ts-ignore
        return function (b) {
            return f(a, b);
        };
    };
}

// @ts-ignore
function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);
console.log(curriedSum(3)(6)) // 9

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
// @ts-ignore
function makeCounter() {
    let count = 1;
    return function () {
        return count++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter()
console.log(counter()); // 1
console.log(counter()); // 2

console.log(counter2()); //1
console.log(counter()); // 3
// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
// @ts-ignore
function makeCounter(start) {
    // @ts-ignore
    this.increase = function() {
        return ++start;
    };
    // @ts-ignore
    this.decrease = function() {
        return --start;
    };
    // @ts-ignore
    this.reset = function() {
        return start > 0 ? 0 : start;
    };
    // @ts-ignore
    this.set = function(n) {
        return start === n ? start : n;
    }
}
// @ts-ignore
let count = new makeCounter(2);

console.log(count.increase()); // 3
console.log(count.increase()); // 4
console.log(count.decrease()) //3
console.log(count.reset()) //0
console.log(count.set(5)) //0



// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// @ts-ignore
 function SuperSum(num) {
    if (num<=0) return 0
     // @ts-ignore
     if (num===1) return m => m
     // @ts-ignore
     let arguments = []
     // @ts-ignore
     function helper(...args) {
         // @ts-ignore
         arguments = [...arguments,...args]
         if(arguments.length>=num){
             arguments.length=num
             // @ts-ignore
             return arguments.reduce((acc,p)=>acc + p)
         }
         else {
             return helper
         }
     }
     return helper
}
// @ts-ignore
console.log(SuperSum(3)(2,5)(3))

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
// @ts-ignore
function flatten (...data) {
    const result = [];
    for (let i = 0; i < data.length; i++) {
        const currentEl = data[i];
        if (Array.isArray(currentEl)) {
            result.push(...flatten(...currentEl));
        }
        else  {
            result.push(currentEl)
        }
    }
    return result
}

console.log(flatten(1,[1,2],[[1,2,3],4]))

// just a plug
export default () => {
};