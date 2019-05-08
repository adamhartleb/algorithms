const binarySearch = (arr, elementToFind) => {
    const calculateMidpoint = (high, low) => Math.floor((high + low) / 2)
    let low = 0
    let high = arr.length - 1
    let midpoint = calculateMidpoint(high, low)
    let steps = 0

    while (true) {
        if (low > high) {
            console.log('Cannot find element.')
            return
        }

        steps++
        const el = arr[midpoint]

        if (el === elementToFind) {
            console.log(`Found ${el} at index ${midpoint}. It took ${steps} step(s)`)
            return
        }

        if (el < elementToFind) {
            low = midpoint + 1
        } else {
            high = midpoint - 1
        }

        midpoint = calculateMidpoint(high, low)
    }
}