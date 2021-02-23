module.exports = function check(str, bracketsConfig) {
  // your solution
  let strLength = str.length;
    for (let i = 0; i < strLength; i++) {
        for (let bracket of bracketsConfig) {
            if (str.includes(bracket.join(''))) {
                str = str.replace(bracket.join(''), '');
                
            }
        }
        strLength--;
    }
    return !str.length
}

