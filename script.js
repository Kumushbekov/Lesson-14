// function calculateTriangleArea (a, b, c) {
//     let p = (a + b + c) / 2
//     let result = Math.sqrt(p * (p - a) * (p - b) * (p - c))
//     return result
// }
//     let a = prompt("Напишите число 1")
//     let b = prompt("Напишите число 2")
//     let c = prompt("Напишите число 3")

//     let a1 = Number(a)
//     let b1 = Number (b)
//     let c1 = Number (c)
//     let result = calculateTriangleArea(a1, b1, c1)
//     alert("Площадь равна " + result)




//     function calculateTriangleArea (a, b, c) {
//     let p = (a + b + c) / 2
//     let result = Math.sqrt(p * (p - a) * (p - b) * (p - c))
//     alert("Площадь равна " + result)
// }

// let a = prompt("Напишите число 1")
// let b = prompt("Напишите число 2")
// let c = prompt("Напишите число 3")

// ! возможный вариант:
// ! let a1 = Number(a)
// ! let b1 = Number (b)
// ! let c1 = Number (c)
// ! calculateTriangleArea(a1, b1, c1)

//  calculateTriangleArea(Number(a), Number(b), Number(c))



// function convertCelsius(C) {
//     let result = (9/5)*C+32
//     return result
// }

// let C = prompt("Напишите температуру в градусах Цельсия:")
// let result = convertCelsius(C)
// alert("Температура по Фаренгейту равна " + result)




// function convertCelsius(C) {
//     let result = (9/5)*C+32
//     alert("Температура по Фаренгейту равна " + result)
// }

// let C = prompt("Напишите температуру в градусах Цельсия:")
// let F=(9/5)*C+32

// convertCelsius(C)


// function multiple(num1, num2) {
//     let result = num1 * num2
//     return result
// }

// let result = multiple (25, 25)
// alert(result)

// let firstIngredientsOfPlov = ingredientsForPlov[0]
// if(ingredientsForPlov[0] === "Масло") {
//     alert("Ты правильно начал!")
// }
// someFunctionForOurTask(ingredientsForPlov[0])

// let faculty = ["Гриффиндор", "Слизерин", "Пуффендуй", "Когтевран"]
// if(faculty[0] === "Слизерин") {
//     alert("Слизерин на первом!")    
// } else {
//     alert("10 очков Гриффиндору!")}



// let numbers = [4, 5, 7]

// function multiple(num1, num2, num3) {
//     let result = num1 + num2 + num3
//     return result
// }

// let result = multiple (numbers[0], numbers[1], numbers[2])
// alert(result)



// faculties
// let isFirstFacultySlitherin = faculties[0] === "Слизерин"
// if(isFirstFacultySlitherin) {}
// getSumOfThree



// let numbers = [4, 5, 7]

// function multiple(num1, num2, num3) {
//     let result = num1 + num2 + num3
//     return result
// }

// let result = multiple (numbers[0], numbers[1], numbers[2])
// alert(result)


//  let faculty = prompt("Напишите название факультета:")
//  if ("слизерин" === faculty.toLowerCase()) {
//  alert("1000 очков Гриффиндору")  
//  } else {
//     alert("Необиссудь!")
//  }

//  let post = prompt("Напишите свою почту:")
//  if (post.("@gmail.com")) {
//     alert("Почта принята!")
//  } else {
//     alert("Почта невалидна!")
//  }


// 3. Задание:
//  let passwort = prompt("Напишите пароль:")
//  if ("qwerty123" === passwort.trim()) {
//     alert("Вы вошли на сайт")
//  } else {
//     alert("Необиссудь!")
//  }


//    let faculty = prompt("На какой факультет Вы хотите поступить?")
//      if(faculty === "Гриффиндор") {
//         alert("Добро пожаловать в " + faculty)
//      } else if(faculty === "Слизерин") {
//         alert("Добро пожаловать в " + faculty)
//      } else if(faculty === "Пуффендуй") {
//         alert("Добро пожаловать в " + faculty)
//      } else if(faculty === "Когтевран") {
//         alert("Добро пожаловать в " + faculty)
//      } else {
//         alert("Это к магглам")
//      }

// for(let i = 0; i <= 4; i ++) {
//     console.log("Salam")
     // ? console.log("Salam " + i) - возможный вариант
// }

// 1. Задание:

// for(let i = 0; i <= 99; i ++) {
//     console.log(i + 1)
// }

// 2. Задание:

// for(let i = 0; i <= 99; i ++) {
//     if(i <= 49) {
//     console.log("Salam " + i)
//     }
//  else {
//     if(i >= 50)
//     console.log("Aleikum " + i)
// } }

// 3. Задание:

// let quantity = []
// for(let i = 0; i <= 99; i ++) {
//     quantity.push(i + 1)
// } 
// console.log(quantity)

// 4. Задание:

// let quantity = []
// for(let i = 0; i <= 99; i ++) {
//     if(i <= 49) {
//     quantity.push("Salam " + (i + 1))
//     } else {
//     if(i >= 50)
//     quantity.push("Aleikum " + (i + 1)) 
//  } 
// } 
// console.log(quantity)

// 5. Задание:

// let faculty = []
// for(let i = 0; i <= 4; i ++) {
//     let result = prompt("Напишите название факультета:")
//     faculty.push(result + (i + 1))
// }
// console.log(faculty)

// 6. Задание:

// let quantity = []
// for (let i = 0; i <= 99; i++) {
//     quantity.push(i + 1001)
// }
// console.log(quantity)
// let result = confirm("Да - удалить с начала, нет - удалить с конца")
// if (result === true) {
//     for (let i = 0; i < 50; i++) {
//         quantity.shift()
//     }
// } else {
//     for (let i = 0; i < 50; i++) {
//         quantity.pop()
//     }
// }
// console.log(quantity)


// let marks = []
// for (let i = 0; i < 10; i++) {
//     let random = Math.random() * 10
//     let mark = Math.floor(random)
//     marks.push(mark)
// }
// console.log(marks)

// let summ = 0
// for (let i = 0; i < marks.length; i++) {
//     summ = summ + marks[i]
// }
// console.log(summ)

// let result = summ / marks.length
// console.log(result)

// let marks = []
// for (let i = 0; i < 10; i++) {
//     let random = Math.random() * 10
//     let mark = Math.floor(random)
//     marks.push(mark)
// }
// console.log(marks)

// let summ = 0
// function addNumberToSumm (item, index) {
//     summ = summ + item
// }
// marks.forEach(addNumberToSumm)
// console.log(summ)
// let result = summ / marks.length
// console.log(result)

// let task = {}
// let exercise = prompt("Напишите название задачи:")
// let deadline = prompt("Напишите дедлайн:")

// task.title = exercise
// task.deadline = deadline

// console.log(task)

// let password = prompt("Введите пароль:") 
// if (password == 12345678) {
//     alert("Пароль верный")
// } else {
//     alert("Неправильный пароль")
// }

// let a1 = Number(a)
// let b1 = Number (b)
// calculateTriangleArea(a1, b1, c1)

// calculateTriangleArea(Number(a), Number(b), Number(c))

// let password = prompt("Введите пароль:")
// let password2 = Number(password)

// if (password2 === 12345678) {
//     alert("Пароль верный")
// } else {
//     alert("Неправильный пароль")
// }


// let passwort = prompt("Введите пароль:") 
// if (passwort === "qwerty123") {
//     alert("Пароль верный")
// } else {
//     alert("Неправильный пароль")
// }


// let head = confirm("У Вас болит голова?")
// let temperature = prompt("Какая у Вас температура?")
// let halls = confirm("Болит ли горло")
// let number = Number(temperature)
// if (head && number >= 38 && halls) {
//     alert("У Вас - грипп")
// } else if (head === false && number >= 38 && halls) {
//     alert("У Вас - ангина")
// } else {
//     alert("Тогда непонятно че-то!")
// }


// let password = prompt("Введите пароль:")
// let password2 = Number(password)

// if (password2 === 12345678) {
//     alert("Пароль верный")
// } else {
//     alert("Неправильный пароль")
// }


// let age = prompt("Введите свой возраст:")
// if ( age >= 18 && age <= 35) {
//     alert("Проходите!")
// } else {
//     alert("Увы, не подходите...")
// }

// let student = confirm("Являетесь ли Вы студентом?")
// let employer = confirm("Являетесь ли Вы работником?")
// if (student === true || employer === true) {
//     alert("ОК!")
// } else {
// }

// let weekend = prompt("Введите день недели:")
// let day = weekend.toLowerCase()
// if ( day === "суббота" || day === "воскресенье" ) {
//     alert("Выходной!")
// } else {
//     alert("Будний день!")
// }

// let text = prompt("Введите текст:")
// let word = "срочно"
// let urgent = word.toLowerCase()

// if (text.includes(urgent)) {
//     console.log("В тексте присутсвует ключевое слово: 'срочно' ")
// }   else {
//     console.log("В тексте не присутсвует ключевое слово")
// }

// let ingredientsForShakarap = ["Помидоры", "Лук", "Соль", "Красный перец"]
// let ingredient = prompt("Выберите ингредиент")
// if (ingredientsForShakarap.indexOf(ingredient) !== -1) {
// alert(ingredientsForShakarap.indexOf(ingredient))
// alert(ingredientsForShakarap[ingredientsForShakarap.indexOf(ingredient)])    
// } else {
//     alert("Жок андай! Анткени неправильный щакарап!")
// } 

// let weekend = prompt("Введите день недели:")
// let day = weekend.toLowerCase()
// if ( day === "суббота" || day === "воскресенье" ) {
//     alert("Выходной!")
// } else {
//     alert("Будний день!")
// }

// let vowels = 'aeiouy'
// for(let i = 0; i < vowels.length; i++) {
//     if (i !== 0 && i !== vowels.length-1) {
//       console.log(vowels[i])  
//     }
// }


// let summ = 0
// for (let i = 0; i < marks.length; i++) {
//     summ = summ + marks[i]
// }
// console.log(summ)

// let result = summ / marks.length
// console.log(result)


// let marks = []
// for (let i = 0; i < 10; i++) {
//     let random = Math.random() * 10
//     let mark = Math.floor(random)
//     marks.push(mark);
// }
// console.log("Оценки студентов:", marks)
// console.log(marks)

// let sum = marks.reduce((acc, mark) => acc + mark, 0)
// let average = sum / marks.length
// console.log("Средняя оценка:")
// console.log(average)
// console.log("Студенты с оценкой выше средней:")

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > average) {
//         console.log("Студент", i + 1, ":", marks[i])
//     }
// }

// 1. function name(firstName, lastName) {
//     let fio = (firstName[0] + ". " + lastName)
//     console.log(fio)
// }


// 2. function capitalize(word) {
//     let firstUpperLetter = word[0].toUpperCase()
//     let restOfWord = word.slice(1,word.length).toLowerCase()
//     console.log(firstUpperLetter + restOfWord)
// }

// let word2 = prompt("Введите слово:")
// capitalize(word2) 

// function doubleLetter(word) {
//      let firstUpperLetter = word[0].toUpperCase()
//      let restOfWord = word.slice(1,word.length).toLowerCase()
//      let doubleLetter2 = word.return(length)
//  }
//  let word = prompt("Введите слово:")
//  doubleLetter(word)

 
//     function capitalize(word) {
//     let firstUpperLetter = word[0].toUpperCase()
//     let restOfWord = word.slice(1,word.length).toLowerCase()
//     console.log(firstUpperLetter + restOfWord)
// }

// let word2 = prompt("Введите слово:")
// capitalize(word2)


// let count = 60

// function counter() {
//     count -= 1
//     console.log(`Осталось: ${count} секунд`)
// }

// let id = setInterval(counter, 1000)

// setTimeout(function() {
//     clearInterval(id)
// }, 10000)

// let id = setInterval(counter, 2000)

// setTimeout(function() {
//     clearInterval(id)
// }, 10000)


// function startTimer() {
//      const inputSeconds = prompt("Введите количество секунд:");
 
//      if (isNaN(inputSeconds) || inputSeconds <= 0) {
//          console.log("Некорректный ввод. Введите положительное число больше нуля.");
//          return;
//      }
 
//      let remainingSeconds = inputSeconds;
 
//      const intervalId = setInterval(function() {
//          console.clear();
//          console.log(`Осталось секунд: ${remainingSeconds}`);
 
//          remainingSeconds--;
 
//          if (remainingSeconds < 0) {
//              clearInterval(intervalId);
//              console.log("Таймер завершен!");
//          }
//      }, 1000);
//  }
 
//  startTimer();



// function removeNumbers(item) {
//     for (let i = 0; i < item.length; i++) {
//         if ("0123456789".includes(item[i]) === false) {
//         console.log(222,item[i])
//         }
//     }
// }
// removeNumbers("V7 Salam aleikum")



// for (let i = 0; i < marks.length; i++) {
        //     if (marks[i] > average) {
        //         console.log("Студент", i + 1, ":", marks[i])
        //     }
        // }
        

        // let text = prompt("Введите текст:")
// let word = "срочно"
// let urgent = word.toLowerCase()

// if (text.includes(urgent)) {
//     console.log("В тексте присутсвует ключевое слово: 'срочно' ")
// }   else {
//     console.log("В тексте не присутсвует ключевое слово")
// }


// function removeNumbers(item) {
//     for (let i = 0; i < item.length; i++) {
//         if ("0123456789".includes(item[i]) === false) {
//         console.log(222,item[i])
//         }
//     }
// }
// removeNumbers("V7 Salam aleikum")


// for (let i = 0; i < marks.length; i++) {
//             if (marks[i] > average) {
//                 console.log("Студент", i + 1, ":", marks[i])
//             }
//         }
        

//                 let text = prompt("Введите текст:")
// let word = "срочно"
// let urgent = word.toLowerCase()


// if (text.includes(urgent)) {
//     console.log("В тексте присутсвует ключевое слово: 'срочно' ")
// }   else {
//     console.log("В тексте не присутсвует ключевое слово")
// }




// function умножитьНа2(массив) {
//      for (let i = 0; i < массив.length; i++) {
//           const удвоенное_число = массив[i] * 2;
//           console.log(удвоенное_число);
//       } 
//      }
     // Пример использования функции
// const числаМассива = [1, 2, 3, 4, 5];
// умножитьНа2(числаМассива);

// function умножитьНа2(массив) {
//      for (let i = 0; i < массив.length; i++) {
//          const удвоенное_число = массив[i] * 2;
//          console.log(удвоенное_число);
//      }
//  }
 
 
//  const числаМассива = [1, 2, 3, 4, 5];
//  умножитьНа2(числаМассива);


// function showTitleOfTask(item, index) {
//     index - счетчик, который начинается с 0
//     item - один элемент с массива по счетчику
//     console.log((index + 1) + "я задача - " + item)
// }

// let tasks = ["ЗАВТРАК", "ОбЕд", "ПолдниК", "Ранний Ужин", "ПоздНий ужИн"]

// function rejim(item) {
//     console.log (" Правильно будет: " + item)
// }

// task.forEach(rejim)

// function multiple(a, b) {
//     let result = a * b
//     console.log(result)
//     return result
// }

// let x = multiple(5, 6)


// let multiple = (a, b) => {
//     let result = a * b
//     console.log(result)
//     return result
// }

// let x = multiple(5, 6)

// function repeat(count, target) {
//      let result = " "
//      for (let i = 0; i < count; i++) {
//          result += target
//      }
//      return result
//  }

//  let povtor = repeat(5, "salam")
// console.log(povtor)

// function normalize(inputString) {
//      const replacements = {
//          '0': 'о',
//          '6': 'б',
//          '3': 'з'
//      }; 
     
//     let result = '';
//     for (let i = 0; i < inputString.length; i++) {
//         const currentChar = inputString[i];
//         const replacement = replacements[currentChar];
//         result += replacement !== undefined ? replacement : currentChar;
//     }
//         return result;
// }

// const normalizedString = normalize('6еш6армак на 3автрак');
// console.log(normalizedString); // Вывод: 'бешбармак на завтрак'


// function normalize(stroka) {
//      let result = " "
//      for (let i = 0; i < stroka.length; i++) {
//          let bukva = stroka[i]
//          if (bukva === "6") {
//              result += "б"
//           } else if (bukva === "3") {
//                result += "з"
//            } else if (bukva === "0") {
//                result += "о"
//           } else {
//                result += bukva
//            }
//        }
//        return result
//    }
        
   
// let inputString = "6еш6армак на 3автрак"
// let normalizedString = normalize(inputString)
// console.log(normalizedString)


// let arr = [1,2,3,4,5]

// let modifiedArr = arr.map((item) => {
//     return item + 1
// })

// console.log(modifiedArr) // [2,3,4,5,6]


// let users = [
//     {firstName: "Ivan", lastName: "Ivanov", email: "ivanov@example.com", age: 25, gender: "male"},
//     {firstName: "Ekaterina", lastName: "Petrova", email: "petrova@example.com", age: 30, gender: "female"},
//     {firstName: "Alexey", lastName: "Sidorov", email: "sidorov@example.com", age: 28, gender: "male"},
//     {firstName: "Maria", lastName: "Kozlova", email: "kozlova@example.com", age: 22, gender: "female"},
//     {firstName: "Dmitry", lastName: "Smirnov", email: "smirnov@example.com", age: 26, gender: "male"},
//     {firstName: "Olga", lastName: "Alexandrova", email: "ivanova@example.com", age: 32, gender: "female"},
//     {firstName: "Maxim", lastName: "Kuznetsov", email: "kuznetsov@example.com", age: 35, gender: "male"},
//     {firstName: "Anna", lastName: "Morozova", email: "morozova@example.com", age: 29, gender: "female"},
//     {firstName: "Vladimir", lastName: "Novikov", email: "novikov@example.com", age: 27, gender: "male"},
//     {firstName: "Yulia", lastName: "Borisova", email: "borisova@example.com", age: 31, gender: "female"}
//   ];

//   let obj = {
//     firstName: "Ivan", 
//     lastName: "Ivanov", 
//     email: "ivanov@example.com", 
//     age: 25, 
//     gender: "male",
// }

copyNumbers.sort((a, b) => {
    if(b < a) {
        return -1
    } else {
        return 1
    }
})

console.log(1, numbers)
console.log(2, copyNumbers)