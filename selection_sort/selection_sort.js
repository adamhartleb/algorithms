const selectionSort = arr => {
    const sorted = []

    while (true) {
        if (arr.length === 0) return sorted

        let biggest = arr[0]
        let biggestIndex = 0

        arr.forEach((el, index) => {
            if (el > biggest) {
                biggest = el
                biggestIndex = index
            }
        })

        arr.splice(biggestIndex, 1)
        sorted.unshift(biggest)
    }
}

const nums = [1, 0, -3, 100, 5, 1, 1, 200, 3, 8000, -200]
const sortednums = selectionSort(nums)
console.log(sortednums)