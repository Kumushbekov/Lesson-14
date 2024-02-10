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
//  if (post.includes("@gmail.com")) {
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

for(let i = 0; i <= 4; i ++) {
    console.log("Salam")
    // ? console.log("Salam " + i) - возможный вариант
}

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