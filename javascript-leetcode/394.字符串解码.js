/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode-cn.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (40.30%)
 * Likes:    141
 * Dislikes: 0
 * Total Accepted:    9.4K
 * Total Submissions: 20.2K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 示例:
 * 
 * 
 * s = "3[a]2[bc]", 返回 "aaabcbc".
 * s = "3[a2[c]]", 返回 "accaccacc".
 * s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
};
// @lc code=end

/*
const decodeString = (s) =>{
    let multiply = [];
    let tempMult = '';
    let repeatStr = [];
    let solution = '';

    for (let char of s) {
       
        if(!isNaN(char)) {
            tempMult = `${tempMult}${char}` // ''
        } else if (char === '['){
            multiply.push(tempMult); 
            tempMult = '';
            
            repeatStr.push(solution);
            solution = '';           
        } else if (char === ']'){

            solution = repeatStr.pop() + solution.repeat(multiply.pop()) 
            
        } else {
            solution += char; 
        }
    }
    return solution;
}
*/