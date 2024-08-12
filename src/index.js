module.exports = function check(str, bracketsConfig) {
      let objBracketsConfig = Object.fromEntries(bracketsConfig)
    let objKeys = Object.keys(objBracketsConfig)
    let objValues = Object.values(objBracketsConfig)

    let result = []

    for (let i = 0; i < str.length; i++) {
        let currentBracket = str[i]
        let lastElement = result[result.length - 1]
        if (objKeys.includes(currentBracket)) {
            if ((lastElement === currentBracket) && (objBracketsConfig[currentBracket] === currentBracket)) {
                result.pop()
            } else {
                result.push(currentBracket)
            }
        } else if (objValues.includes(currentBracket)) {
            if(objBracketsConfig[lastElement] === currentBracket) {
                result.pop()
            } else {
                return false
            }
        }
    }

    return (result.length === 0)
}
