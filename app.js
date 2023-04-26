// lesson 10 task 1 
// let name = prompt ('Введите имя','');
// let soname = prompt ('Введите фамилию','');
// let nikname = prompt ('Введите никнейм',''); 
// // let Hello = ("name" + "soname" + )
// if (name != "" $$ name)
// {alert ((name) + (soname))}
// lesson 10 task 2 
// let anyNumber = prompt ('Введите любое число', '');
//     if (anyNumber == 0) 
//         {
//             alert ('Просто ноль', '')
//         }
//     else 
//         {
//             let comparisonResult = (anyNumber < 100) ? 'меньше ста, ':
//                                    (anyNumber > 100) ? 'больше ста, ':
//                                                        'ровно сто, ';
//             let evenOrOdd = (anyNumber % 2 == 0) ? "четное, ":
//                                                     "не четное, "; 
//             let negativePositive = (anyNumber < 0) ? "отрицательное, ":
//                                                      "положительное, ";
//             let fractionalInteger = (anyNumber-Math.floor (anyNumber) == 0) ? "целое.":
//                                                                            "дробное.";                                
//             alert ('Ваше число: ' + comparisonResult + evenOrOdd + negativePositive + fractionalInteger);
//         }
// for exemple
// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }
// 05.04.2023
// const obj = {
//     name: "dima",
//     age: 1,
//     scills: {
//         react: true,
//         angular: false,
//     }
//

// 19.04.2023

// enum animal {
//     murzic = 'murzic',
//     maik = 'maik'
// }

// function bar <T> (value: T): T {
//     return value
// }
// console.log (bar<Namber>(1))


// interface ISmt {
//     a: number;
//     b: string
// }
// interface IObj {
//     a: number;
//     b: string;
//     c: boolean; 
//     d?: number,
//     e: ISmt
// }
// const obj: IObj = {
//     a: 1,
//     b: 'sad'
//     c: true,
//     e: 
// }


// setTimeout (()=> {
// console.log ('don')
// },2000)

// setInterval (()=> {
//     console.log ('don')
//     },1000)

// const date = new Date().toLocaleTimeString()
// console.log(date)


// function bar (num){
//     const arr = new Array(num).fill(undefined)
//     return arr.map((_,idx) => 2 * idx + 1)
// }
// console.log(bar(3))//[1,3,5]



// DOM

// const main = document.getElementById("main")
// const mainClass = document.querySelector("#.main-cont")
// const mainClassAll = document.querySelectorAll(".main-cont")
// const arr = [...mainClassAll]
// const arr1 = Array.from(mainClassAll)
// console.log(arr)

// const main = document.getElementById("main")

// const divElem = document.createElement("div")
// divElem.textContent = "Hello"
// divElem.style.color = 'red'
// main.append(divElem)
// setInterval (()=> {
//     divElem.classList.toggle ('Hello')
//     },1500)
// setInterval (()=> {
//     divElem.classList.toggle ('Hello')
//     },2000)


// const divElem2 = document.createElement("div")
// divElem2.textContent = "Myrzic"
// // divElem2.classlist.add("Myrzic")
// // divElem2.classlist.remove("Myrzic")
// // divElem2.classlist.toggle("Myrzic")
// main.prepend(divElem2)

// const input = document.createElement('input')
// input.type = "checkbox"
// main.append(input)

// const label = document.createElement("label")
// const divInputLabel1 = document.createElement("div")
// divInputLabel1.append(input)
// divInputLabel1.append(label)
// label.textContent = "cashadh"

// main.append(divInputLabel1)



// 21.04.2023



const main = document.getElementById('main')
const header = document.createElement('header')

const hederBtnValue = ['about', 'home', 'prise']

header.classList.toggle('header-cont')

const contLogo = document.createElement('div')
const contBtn = document.createElement('div')

hederBtnValue.map(i =>{
    const btn = document.createElement('button')
    btn.textContent = i
    contBtn.append(btn)
})

const logo = document.createElement('img')


main.append(header)
header.append(contBtn)
header.append(contLogo)

function hello(){
    console.log ('Hello my friend')
}
main.addEventListener('click', hello)

const el = document.createElement('div')
el.textContent = 'hi'
el.id = "elId"
const elId = document.getElementById ('add')
main.addEventListener('click', hello)
main.append (el)



// const glases = [
//         {
//             title: 'Ray-Ban',
//             date: '2023',
//             sex: 'mail',
//             ranking: 'new',
//         },  
//         {
//             title: 'Furla',
//             date: '2023',
//             sex: 'femail',
//             ranking: 'new',
//         },
//         {
//             title: 'Furla',
//             date: '2022',
//             sex: 'femail',
//             ranking: 'sale',
//         },
//         {
//             title: 'Furla',
//             date: '2022',
//             sex: 'femail',
//             ranking: 'sale',
//         }
// ]
// arr.forEach(function(i => i)){
// alert ()
// }




// ul clas
// divElem.style.color = 'red'
// main.append(divElem)
