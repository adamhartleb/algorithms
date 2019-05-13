const binarySearch = (arr, elToFind) => {
    const low = 0
    const high = arr.length - 1
    const midpoint = Math.floor((high + low) / 2)
    const val = arr[midpoint]

    if (val === elToFind || (arr.length === 1 && arr[0] === elToFind)) {
        console.log('Found the element.')
        return
    } else if (val > elToFind) {
        binarySearch(arr.slice(low, midpoint), elToFind)
    } else if (val < elToFind) {
        binarySearch(arr.slice(midpoint + 1, arr.length), elToFind)
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

binarySearch(arr, 1)