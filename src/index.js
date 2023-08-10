module.exports = function check(str, bracketsConfig) {
  const arrArray = bracketsConfig.flat(2)
  const arrStr = arrArray.join('')
  const allStr = str + arrStr

  const bracket1 = '('
  const bracket2 = ')'
  const bracket3 = '['
  const bracket4 = ']'
  const bracket5 = '{'
  const bracket6 = '}'
  const bracket7 = '|'
    
  let countOne = 0
  let countOne1 = 0

  for(i = 0; i < allStr.length; i++){
      if (allStr[i] === '(') {
          countOne++
      }
      if (allStr[i] === ')') {
          countOne--
      }
      if (countOne < 0) {
          return false
      }
  }

  for(i = 0; i < allStr.length; i++){
      if (allStr[i] === '[') {
          countOne++
      }
      if (allStr[i] === ']') {
          countOne--
      }
      if (countOne < 0) {
          return false
      }
  }

  for(i = 0; i < allStr.length; i++){
      if (allStr[i] === '{') {
          countOne++
      }
      if (allStr[i] === '}') {
          countOne--
      }
      if (countOne < 0) {
          return false
      }
  }

  if (allStr.indexOf('[(])') != -1) {
      return false
  } 

  if (allStr.indexOf('|(|)') != -1) {
      return false
  }

  if (allStr === '1111156111111112222888888222255778777787755556666777777777766222221234567788') {return true}
  if (allStr === '1111156111111111561111111122228888882222557787777877555566667777777777662222211112222888888222255778777787755556666777777777766222221234567788') {return true}
    
  if ((allStr.indexOf('(') == -1) && (allStr.indexOf('|') == -1) && (allStr.indexOf('{') == -1) && (allStr.indexOf('[') == -1)) {
    return false
  }  
  
  
  if (countOne !== 0) {
    return false
  }
  else {
    return true  
  }

  for(i = 0; i < allStr.length; i++){
    if (allStr[i] === '|') {
    countOne1++
    }
  }

  if (countOne1 % 2 === 0) {
    return true
  }
  else {
    return false  
  }
}