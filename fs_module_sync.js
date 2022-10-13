
const {readFileSync,writeFileSync}  = require('fs')

const first=readFileSync('./content/first.txt','utf8')

const second=readFileSync('./content/second.txt','utf8')


console.log(first)
console.log(second)

writeFileSync('./content/result.txt',`hello are you in result.txt file ...........\n${first}\n${second}`)
writeFileSync('./content/result.txt',`\nappend text......by flag a`,{flag:'a'})
