let s = 'hello world'
let val ;
// get length
val = s.length
console.log(val)

console.log(s[0])

//change case 
val = s.toUpperCase()
val = s.toLowerCase()
console.log(val)

//get sub string 
val = s.substring(0,5)
console.log(val)

//split + join 
val= s.split('')
val= val.join('+')
console.log(val)
