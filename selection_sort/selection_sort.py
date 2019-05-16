nums = [3, 8, 0, -2, 100, -500, 1000, 1]
sorted = []

while len(nums) > 0:
    biggest_index = 0
    biggest = nums[0]

    for i in range(len(nums)):
        if nums[i] > biggest:
            biggest = nums[i]
            biggest_index = i
    
    sorted.insert(0, biggest)
    nums.pop(biggest_index)

print(sorted)
