const ary1 = [1, 2, 3, 4, 5, 6]
const ary2 = [1, 2, 3, 4, 5, 6, 7]

// 用递归
function bs1 (target, ary, startIndex = 0, endIdex = ary.length - 1) {
    const midIndex = parseInt(startIndex + (endIdex - startIndex) / 2)
    const midValue = ary[midIndex]
    if (target === midValue) {
        return midIndex
    } else if (target > midValue) {
        return bs1(target, ary, midIndex + 1, endIdex)
    } else if (target < midValue) {
        return bs1(target, ary, startIndex, midValue - 1)
    }
    return -1
}

// 不用递归
function bs2 (target, ary) {
    let startIndex = 0
    let endIdex = ary.length - 1
    while (startIndex <= endIdex) {
        const midIndex = parseInt(startIndex + (endIdex - startIndex) / 2)
        const midValue = ary[midIndex]
        console.log(startIndex, endIdex, midValue)
        if (target === midValue) {
            return midIndex
        } else if (target < midValue) {
            endIdex = midIndex - 1
        } else {
            startIndex = midIndex + 1
        }
    }
    return -1
}

console.log('>>', bs2(2, ary1))
// console.log(bs2(2, ary2))
