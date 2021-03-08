// *************************** for with let 
for(let i = 0 ; i < 5 ; i++)
{
  console.log('hello world ' +i )
}

  console.log('hello world ' +i )

  // *************************** for with var
for(var i = 0 ; i < 5 ; i++)
{
  console.log('hello world ' +i )
}

  console.log('hello world ' +i )


  //while

let i = 1 ;

while(i < 10) {
  console.log(`while loop iteration ${i}`)
  i++
}

//******** loop through arrays */
const numbers =[ 22 , 55 , 66]
for(let i = 0 ; i < numbers.length ; i++)
{
  console.log(numbers[i] )
}


// for .. in  and of loop

const numbers =[ 22 , 55 , 66]

for (let x of numbers)
{
  console.log(x)
}