const quicksort = arr => {
    if (arr.length === 1 || arr.length === 0) {
        return arr
    } else if (arr.length === 2) {
        if (arr[0] > arr[1]) return [arr[1], arr[0]]
        else return arr
    } else {
        const pivot = Math.floor(arr.length / 2)
        const arrOne = []
        const arrTwo = []
        arr.forEach((el, index) => {
            if (index === pivot) return
            else if (el >= arr[pivot]) arrTwo.push(el)
            else arrOne.push(el)
        })

        return [].concat(quicksort(arrOne), arr[pivot], quicksort(arrTwo))
    }
}

const arr = [-1, 10, 2, 5, 1000, -10, 4, 2, 2000, 1999, 0, -290381203]

console.log(quicksort(arr))