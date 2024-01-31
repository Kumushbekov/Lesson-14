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



    function calculateTriangleArea (a, b, c) {
    let p = (a + b + c) / 2
    let result = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    alert("Площадь равна " + result)
}

let a = prompt("Напишите число 1")
let b = prompt("Напишите число 2")
let c = prompt("Напишите число 3")

// ! возможный вариант:
// ! let a1 = Number(a)
// ! let b1 = Number (b)
// ! let c1 = Number (c)
// ! calculateTriangleArea(a1, b1, c1)

calculateTriangleArea(Number(a), Number(b), Number(c))