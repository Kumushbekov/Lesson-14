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

let firstIngredientsOfPlov = ingredientsForPlov[0]
if(ingredientsForPlov[0] === "Масло") {
    alert("Ты правильно начал!")
}
someFunctionForOurTask(ingredientsForPlov[0])