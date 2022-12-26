
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function generatePassword(options) {
  // 先把想要的值定義出來(大小寫\符號)
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  // 定義一個收集箱把要的值集中
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(...lowerCaseLetters)
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(...upperCaseLetters)
  }
  if (options.numbers === 'on') {
    collection = collection.concat(...numbers)
  }
  if (options.symbols === 'on') {
    collection = collection.concat(...symbols)
  }

  // 把不要的字串從箱中去除
  if (options.excludeCharacters) {
    collection = collection.filter(character =>
      !options.excludeCharacters.includes(character)
    )
  }
  // 如果無法產生密碼的錯誤：空陣列
  // return 會中斷函式的執行
  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  //  隨機在收集箱中取後放回
  let password = ''
  for (i = 0; i <= options.length; i++) {
    password += sample(collection)
  }
  // 回傳密碼
  return password
}
// 匯出函式
module.exports = generatePassword
