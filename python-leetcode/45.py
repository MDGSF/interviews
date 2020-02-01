class Solution:
  def jump(self, nums: List[int]) -> int:
    end, maxPosition, steps = 0, 0, 0
    for i in range(len(nums)-1):
      maxPosition = max(maxPosition, nums[i] + i)
      if i == end:
        end = maxPosition
        steps += 1
    return steps

