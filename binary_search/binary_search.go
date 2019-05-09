package main

import "fmt"

func binarySearch(nums []int, numToFind int) {
	steps := 0
	low := 0
	high := len(nums) - 1
	calculateMidpoint := func(high, low int) int {
		return (high + low) / 2
	}
	midpoint := calculateMidpoint(high, low)

	for {
		steps++

		if nums[midpoint] == numToFind {
			fmt.Printf("Number found at index %d. It tooks %d step(s).\n", midpoint, steps)
			return
		}

		if nums[midpoint] > numToFind {
			high = midpoint - 1
		} else {
			low = midpoint + 1
		}

		midpoint = calculateMidpoint(high, low)
	}
}

func main() {
	nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18}
	binarySearch(nums, 17)
}
