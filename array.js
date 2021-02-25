const arr = [10, 1, 3, 35, 7, 9, 4]
arr.sort(compareNum)
console.log(arr)

function compareNum (a, b) {
    return a-b
}

// arr[99] = 0
// console.log(arr.length)
// console.log(arr)

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// arr.pop()
// arr.push(10)
// console.log(arr)

//
// for (let i = 0; i< arr.length; i++) {
//     console.log(arr[i])
// }
//
// for (let value of arr) {
//     console.log(value)
// }

// const str = prompt("", "")
// const product = str.split(', ')
// product.sort()
// console.log(product.join('; '))

