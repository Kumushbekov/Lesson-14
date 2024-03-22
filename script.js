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

// copyNumbers.sort((a, b) => {
//     if(b < a) {
//         return -1
//     } else {
//         return 1
//     }
// })

// console.log(1, numbers)
// console.log(2, copyNumbers)

// copyObj.age = 30

// console.log(obj)
// console.log(copyObj)


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
//     gender: "male"
//   }

  
//   let firstName1 = obj.firstName
//   let lastName1 = obj.lastName
//   let age1 = obj.age


//   let { firstName, lastName, age } = obj

// console.log(1, firstName, lastName, age)
// console.log(2, firstName1, lastName1, age1)
// console.log(3, obj)



// let users = [
//      {firstName: "Ivan", lastName: "Ivanov", email: "ivanov@example.com", age: 25, gender: "male"},
//      {firstName: "Ekaterina", lastName: "Petrova", email: "petrova@example.com", age: 30, gender: "female"},
//      {firstName: "Alexey", lastName: "Sidorov", email: "sidorov@example.com", age: 28, gender: "male"},
//      {firstName: "Maria", lastName: "Kozlova", email: "kozlova@example.com", age: 22, gender: "female"},
//      {firstName: "Dmitry", lastName: "Smirnov", email: "smirnov@example.com", age: 26, gender: "male"},
//      {firstName: "Olga", lastName: "Alexandrova", email: "ivanova@example.com", age: 32, gender: "female"},
//      {firstName: "Maxim", lastName: "Kuznetsov", email: "kuznetsov@example.com", age: 35, gender: "male"},
//      {firstName: "Anna", lastName: "Morozova", email: "morozova@example.com", age: 29, gender: "female"},
//      {firstName: "Vladimir", lastName: "Novikov", email: "novikov@example.com", age: 27, gender: "male"},
//      {firstName: "Yulia", lastName: "Borisova", email: "borisova@example.com", age: 31, gender: "female"}
//    ];

   
// let names = users.map((item) => {
//      let { firstName, lastName } = item
//      let destrucurizatedName = firstName[0] + ". " + lastName
//      return destrucurizatedName
//  })

//  console.log(names)



// let modifiedUsers = users.map((item) => {
//      let obj = { ...item, fullName: item.firstName + ' ' + item.lastName }
//      return obj
//  })
//  console.log(modifiedUsers)



// let students = [
//      ['Анна', 85],
//      ['Иван', 92],
//      ['Мария', 78],
//      ['Алексей', 89],
//      ['Екатерина', 95],
//      ['Дмитрий', 77],
//      ['Ольга', 88],
//      ['Петр', 90],
//      ['Светлана', 84],
//      ['Артем', 91]
//    ];
 
   
//   let modifiedStudents = students.map((item) => {
//      let [studentName, score] = item
//      let list = studentName + " получил(а) оценку " + score + "/100"
//      return list
//    })
 
//    console.log(modifiedStudents)

// let obj = {
//      firstName: "Ivan", 
//      lastName: "Ivanov", 
//      email: "ivanov@example.com", 
//      age: 25, 
//      gender: "male"
//    }
 

// if(firstName) {
//      console.log("Он написал имя")
//  } else {
//      console.log("там пустая строка или null")
//  }
 
 
// let users = []

// if(users.length) {
//     console.log("В списке есть люди", users)
// } else {
//     console.log("список пуст", users)
// }


// let isAdult = confirm("Вам есть 18 лет?")

// if(isAdult) {
//     console.log("Заходите!")
// } else {
//     console.log("Вход запрещен!")
// }


// let tasks = []

// if(!tasks.length) {
//     console.log("Задач не осталось")
// }

// let firstName = prompt("Введите имя")

// if(!firstName) {
//     console.log("Пусть тебя зовут тогда Асан")
// }



// let productsArray = [
//      { name: 'Widget A', price: 100, expirationDate: '2024-12-31', countryOfOrigin: 'USA' },
//      { name: 'Gadget B', price: 150, expirationDate: '2025-06-30', countryOfOrigin: 'China' },
//      { name: 'Tool X', price: 200, expirationDate: '2024-10-15', countryOfOrigin: 'Germany' },
//      { name: 'Device Y', price: 50, expirationDate: '2023-08-20', countryOfOrigin: 'Japan' },
//      { name: 'Appliance Z', price: 120, expirationDate: '2025-03-15', countryOfOrigin: 'South Korea' },
//      { name: 'Accessory P', price: 90, expirationDate: '2024-09-01', countryOfOrigin: 'Taiwan' },
//      { name: 'Product Q', price: 110, expirationDate: '2025-04-30', countryOfOrigin: 'France' },
//      { name: 'Item M', price: 80, expirationDate: '2023-11-25', countryOfOrigin: 'Italy' },
//      { name: 'Gizmo N', price: 130, expirationDate: '2025-02-10', countryOfOrigin: 'Canada' },
//      { name: 'Thingamajig O', price: 70, expirationDate: '2024-07-05', countryOfOrigin: 'Brazil' },
//      { name: 'Contraption C', price: 105, expirationDate: '2023-12-20', countryOfOrigin: 'Mexico' },
//      { name: 'Doodad D', price: 75, expirationDate: '2024-05-10', countryOfOrigin: 'India' },
//      { name: 'Instrument E', price: 95, expirationDate: '2025-01-15', countryOfOrigin: 'Australia' },
//      { name: 'Product F', price: 115, expirationDate: '2024-08-30', countryOfOrigin: 'Spain' },
//      { name: 'Device G', price: 85, expirationDate: '2023-10-05', countryOfOrigin: 'Russia' },
//      { name: 'Accessory H', price: 125, expirationDate: '2025-07-10', countryOfOrigin: 'UK' },
//      { name: 'Tool I', price: 55, expirationDate: '2024-02-28', countryOfOrigin: 'Switzerland' },
//      { name: 'Widget J', price: 135, expirationDate: '2025-05-20', countryOfOrigin: 'Netherlands' },
//      { name: 'Electronic Gadget', price: 180, expirationDate: '2025-09-15', countryOfOrigin: 'South Korea' },
//      { name: 'Kitchen Appliance', price: 95, expirationDate: '2024-11-30', countryOfOrigin: 'Italy' },
//      { name: 'Kurut', price: 30, expirationDate: '2023-06-20', countryOfOrigin: 'Kyrgyzstan' }
 
//    ];

//    let question = prompt("Напишите максимальную сумму:")
// let filteredPrice = productsArray.filter((item) => {
//     let {price} = item
// if (price <= question) {
//     return true
// } else {
//     return false
// }
// })


// if(!filteredPrice.length) {
//      alert("Нет товаров по такому запросу")
//  }
     
//  console.log(productsArray)
//  console.log(filteredPrice)
 

//  let filteredAge = users.filter((item) => {
//      let {age} = item
//      if (age >= 30 && age <= 35) {
//          return true
//      } else {
//          return false
//      }
//  })
 
//  console.log(filteredAge)


// let pId = document.getElementById('hello')

// console.log(1, pTagName)
// console.log(2, pClassName)
// console.log(3, pId)


// for(let i = 0; i < pTagName.length; i++) {
//      pTagName[i].innerText = 'salam aleikum ' + i
//  }
 

//  pId.innerText = 'Salam aleikum'


// let firstName = prompt('Напишите свое имя:')

// let firstNameElement = document.getElementById('name')
// firstNameElement.innerText = firstName

// let element = document.getElementById('salam')

// element.innerText += ' Aleikum'


// function addPost() {
//      let container = document.getElementById('container')

//     let div = document.createElement('div')
//     let p = document.createElement('p')
//     let img = document.createElement('img')
//     let like = document.createElement('button')
//     let dislike = document.createElement('button')

//     div.setAttribute('class', 'post')

//     let text = prompt('Напишите описание нового поста:')
//     p.innerText = text

//     let urlForImg = prompt('Вставьте ссылку для картинки:')
//     img.setAttribute('src', urlForImg)
//     img.setAttribute('class', 'postImg')

//     like.innerText = 'Нравится👍'
//     dislike.innerText = 'Не нравится👎'

//     div.append(img)
//     div.append(p)
//     div.append(like)
//     div.append(dislike)
//     container.append(div)
// }

//      addPost()


// let imgEl = document.createElement('img')
// console.log(imgEl)

// .setAttribute(названиеАтрибута, значение)
// imgEl.setAttribute('src', 'https://st.depositphotos.com/1899425/1623/i/450/depositphotos_16232649-stock-photo-moraine-lake-sunrise-colorful-landscape.jpg')
// imgEl.setAttribute('width', '100%')

// let nationPicElement = document.getElementById('nation-pic')
// .append(элемент) - добавление элемента внутрь div#nation-pic
// nationPicElement.append(imgEl)


// function addText() {
//      let container = document.getElementById('container')
//      let text = prompt("Введите текст:")
//      let p = document.createElement('p')
//      p.innerText = text

//      container.append(p)
// }

// let buttonEl = document.getElementById('button')
// buttonEl.addEventListener('click', addText)


// function sayHello() {
//      console.log('Salam aleikum')
//  }

//  let buttonEl = document.getElementById('btn')

// let text = document.getElementById('text')


// for(let i = 0; i < odds.length; i++) {
//      odds[i].style.color = 'red'
//  }

//  for(let i = 0; i < evens.length; i++) {
//      evens[i].style.color = 'green'
//  }
 
//  const text = document.getElementById('text')
// const btnRed = document.getElementById('btn-red')
// const btnGreen = document.getElementById('btn-green')
// const btnBlue = document.getElementById('btn-blue')

// btnRed.addEventListener('click', () => {
//      text.style.color = 'red'
//  }) // первый вариант

//  function changeColorToGreen() {
//      text.style.color = 'green'
//  }
//  btnGreen.addEventListener('click', changeColorToGreen)  // второй вариант

 
// btnBlue.addEventListener('click', () => {
//      text.style.color = 'blue'
//  }) // третий вариант
 
// const text = document.getElementById('text')
// const btn = document.getElementById('btn')

// text.classList.add('title')
// text.classList.add('red')
// text.classList.add('xxl')

// text.classList.remove('red')

// console.log(text.classList.contains('red'))

// btn.addEventListener('click', () => {
//      if (text.classList.contains('red')) {
//          text.classList.remove('red') 
//      } else {
//           text.classList.add('red')
//       }
//   })
  

let image = document.getElementById('image')

image.addEventListener('click', () => {

     console.log(image.getAttribute('src'))
     if ('https://cdn-icons-png.flaticon.com/512/4315/4315713.png' === image.getAttribute('src')) {