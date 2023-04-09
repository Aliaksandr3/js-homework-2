// "use strict"
// let message="Hello";
// alert(message)

// let years = prompt('Сколько вам лет?', 100);
// alert('Вам ' + years + ' лет!')

// let isAdmin = confirm("Вы - администратор?");
// alert( isAdmin );

// lesson 9 task 1
// let text = prompt("Введите текст"," ");
// alert (text)

// lesson 9 task 2
// let firstNumber = +prompt("Введите первое число",' ');
// let secondNumber = +prompt("Введите второе число",' ');
// let thirdNumber = +prompt("Введите третье число",' ');
// let sum = firstNumber+secondNumber+thirdNumber;
// alert(sum) 

// lesson 9 task 3
// const name = prompt("Введите имя пользователя",' ');
// let age = prompt("Введите возраст пользователя, полных лет",' ');
// if (age >= 18) {alert('Добро пожаловать')} 
// else {alert("Простите, "+(name)+" , доступ закрыт!")}

// lesson 9 task 4
let bl = confirm ("Хотите ввести название блока?"), nameBl;
    if (bl == true)
        {
            nameBl = prompt ("Введите название блока", "")
            // {if (nameBl == !true) alert ("kksjdj")};
                            let el = confirm ("Хотите ввести название элемента?"), nameEl;
                    if (el == true)
                        {
                            nameEl = prompt ("Введите название элемента", "")
                            let mod = confirm ("Хотите ввести название модификатора?"), nameMod;
                                if (mod == true)
                                    {
                                        nameMod = prompt ("Введите название модификатора", "")
                                        alert ((nameBl) + '_' + (nameEl) + '__' + (nameMod))
                                    }   
                                else 
                                    {
                                        alert ((nameBl)+ '_' +(nameEl))
                                    }
                        }
                    else 
                        {
                            alert (nameBl)
                        }
        }   
    else 
        {
            alert ("Элементу не присвоен класс!","")
        }

// lesson 9 task 5 
// let a = prompt ('Введите первое число','');
// let b = prompt ('Введите второе число','');
// let res = prompt ('Выберите нужную операцию (div, plus, mult, minus)','');
// if (res == "div") 
// alert (+a / +b)
// if (res == "plus") 
// alert (+a + +b)
// if (res == "mult") 
// alert (+a * +b)
// if (res == "minus") 
// alert (+a - +b)

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
// }
// console.log(obj.name)


// const arr = [1, 2, 3]
// for(let i=0; i < arr.length; i++){
//     console.log (arr [i])
// }

// let str = 'hello'



function getStr (str){
   let strFirst = str.toUpperCase ()
   let strUpper = strFirst.slicer (0, 1) 
   let Second = strFirst.slicer (1, str.length)
   let result = strUpper + strSecond.tolowerCase()
   return result
   

}