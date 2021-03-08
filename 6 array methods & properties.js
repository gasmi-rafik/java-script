const colors = ['black' , 'white' , 'red' , 'yellow']
console.log(colors)

console.log(colors.length)

//get one value 
console.log(colors[1])

//add value using push 
colors.push('orange')
console.log(colors)

// add to beginning 
colors.unshift("purple")
console.log(colors)
//remove from beginning
colors.shift()
console.log(colors)

//remove last one 
colors.pop()
console.log(colors)

//check if array 
console.log(Array.isArray(colors))
console.log(colors.indexOf('red'))