use std::collections::HashMap;

impl Solution {
  pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map: HashMap<i32, i32> = HashMap::new();
    for (i, &num) in nums.iter().enumerate() {
      let peer = target - num;
      if map.contains_key(&peer) {
        return vec![*map.get(&peer).unwrap(), i as i32];
      }
      map.insert(num, i as i32);
    }
    vec![]
  }
}

struct Solution;

fn main() {
  let nums = vec![2, 7, 11, 15];
  let target = 9;
  let result = Solution::two_sum(nums, target);
  println!("result = {:?}", result);
}
