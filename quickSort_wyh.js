const t = require('./array/arrayForSort')

function quick (arr) {
    if (arr.length <= 1) {
        return arr
    }
    const i = 0
    const ai = arr[i]
    const len = arr.length
    const p = []
    const f = []
    for (let j = i + 1; j < len; ++j) {
        const aj = arr[j]
        if (aj <= ai) {
            p.push(aj)
        } else {
            f.push(aj)
        }
    }
    return quick(p).concat(ai, quick(f))
}

console.log(quick(t.arr1))
console.log(quick(t.arrEmpty))
console.log(quick(t.arrOneValue))