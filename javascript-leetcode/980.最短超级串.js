/*
 * @lc app=leetcode.cn id=980 lang=javascript
 *
 * [980] 最短超级串
 *
 * https://leetcode-cn.com/problems/unique-paths-iii/description/
 *
 * algorithms
 * Hard (66.59%)
 * Likes:    21
 * Dislikes: 0
 * Total Accepted:    1.7K
 * Total Submissions: 2.6K
 * Testcase Example:  '[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]'
 *
 * 在二维网格 grid 上，有 4 种类型的方格：
 *
 *
 * 1 表示起始方格。且只有一个起始方格。
 * 2 表示结束方格，且只有一个结束方格。
 * 0 表示我们可以走过的空方格。
 * -1 表示我们无法跨越的障碍。
 *
 *
 * 返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目，每一个无障碍方格都要通过一次。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
 * 输出：2
 * 解释：我们有以下两条路径：
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
 * 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
 *
 * 示例 2：
 *
 * 输入：[[1,0,0,0],[0,0,0,0],[0,0,0,2]]
 * 输出：4
 * 解释：我们有以下四条路径：
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
 * 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
 * 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
 * 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
 *
 * 示例 3：
 *
 * 输入：[[0,1],[2,0]]
 * 输出：0
 * 解释：
 * 没有一条路能完全穿过每一个空的方格一次。
 * 请注意，起始和结束方格可以位于网格中的任意位置。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= grid.length * grid[0].length <= 20
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  const ctx = {
    result: 0,
  };
  let startRow = 0;
  let startCol = 0;
  let endRow = 0;
  let endCol = 0;
  let empty = 1;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === 0) {
        empty += 1;
      } else if (grid[row][col] === 1) {
        startRow = row;
        startCol = col;
      } else if (grid[row][col] === 2) {
        endRow = row;
        endCol = col;
      }
    }
  }
  dfs(grid, startRow, startCol, endRow, endCol, empty, ctx);
  return ctx.result;
};

function dfs(grid, startRow, startCol, endRow, endCol, empty, ctx) {
  if (startRow < 0 || startRow >= grid.length ||
    startCol < 0 || startCol >= grid[0].length ||
    grid[startRow][startCol] < 0) {
    return;
  }
  if (startRow === endRow && startCol === endCol) {
    if (empty === 0) {
      ctx.result += 1;
    }
    return;
  }
  grid[startRow][startCol] = -2;
  dfs(grid, startRow+1, startCol, endRow, endCol, empty-1, ctx);
  dfs(grid, startRow-1, startCol, endRow, endCol, empty-1, ctx);
  dfs(grid, startRow, startCol+1, endRow, endCol, empty-1, ctx);
  dfs(grid, startRow, startCol-1, endRow, endCol, empty-1, ctx);
  grid[startRow][startCol] = 0;
}
// @lc code=end

