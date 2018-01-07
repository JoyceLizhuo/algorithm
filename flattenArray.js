const origin = [
    1,
    [2, 3],
    [
        4,
        [5, 6],
        7
    ],
    8,
    [
        9,
        [10, 11, 12]
    ],
    13
]

function flatten (ary) {
    let r = []
    ary.forEach((aryItem) => {
        if (Array.isArray(aryItem)) {
            r = r.concat(flatten(aryItem))
        } else {
            r.push(aryItem)
        }
    })
    return r
}

console.log(flatten(origin))
