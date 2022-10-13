const _=require('lodash')

var items=[1,[2,[3,[4]]]]
//console.log(items)
console.log("======================================")
const newItems=_.flattenDeep(items)
console.log(newItems)
