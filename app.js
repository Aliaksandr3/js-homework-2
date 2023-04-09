

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