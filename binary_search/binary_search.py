nums = [1, 2, 3, 4, 5, 6, 7, 8]
numToFind = 8

steps = 0
low = 0
high = len(nums) - 1

while True:
    steps += 1
    midpoint = (high + low) // 2

    value = nums[midpoint]

    if value == numToFind:
        print(f"Number found at index {midpoint}. It took {steps} step(s) to find.")
        break

    if value < numToFind:
        low = midpoint + 1
    else:
        high = midpoint - 1
