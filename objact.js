const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    counter: function () {
        console.log(Object.keys(options))
    }
}

const {border, bg} = options.colors
console.log(border.toUpperCase())

// console.log(options['colors']['bg'])
//
// let counter = 0
//
// for(let key in options) {
//     if (typeof(options[key])==='object') {
//         for(let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`)
//             counter++
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`)
//         counter++
//     }
// }
//
// console.log(counter)