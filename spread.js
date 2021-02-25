const  obj = {
    a: 5,
    b: 10
}

function copy(mainObj) {
    let objCopy = {}
    let key
    for (key in mainObj) {
        objCopy[key] = mainObj[key]
    }

    return objCopy
}

const number = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copy(obj)
console.log(number)
console.log(newNumbers)

