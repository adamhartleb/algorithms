package main

import "fmt"

func main() {
	nums := []int{3, 0, -2, 100, 5, 10, 200, 9, 88, -50}
	sortedNums := quicksort(nums)
	fmt.Println(sortedNums)
}

func quicksort(nums []int) []int {
	fmt.Println(nums)
	if len(nums) <= 1 {
		return nums
	} else if len(nums) == 2 {
		if nums[0] > nums[1] {
			return []int{nums[1], nums[0]}
		} else {
			return nums
		}
	} else {
		pivot := (len(nums) - 1) / 2
		left := []int{}
		right := []int{}

		for i, v := range nums {
			if i == pivot {
				continue
			}

			if v < nums[pivot] {
				left = append(left, v)
			} else {
				right = append(right, v)
			}
		}

		return append(
			quicksort(left),
			append(
				[]int{nums[pivot]},
				quicksort(right)...,
			)...,
		)
	}
}
