//*** objects */
const person = {
    name : "rafik" ,
    age : 27 ,
    addresse : 'tunis'
  }
  //methode 1
  // var tab = Object.values(person) ;
  // tab[0]= "kais"
  
  
  // console.log(tab)
  
  //methode 2
  person.name = "chiheb"
  console.log(person)

   // delete
 delete(person.age) 
 console.log(person)

 //add 
person.email ='rafik@gmail.com'
 console.log(person)

 /** table */
const numbers = [1 , 2 , 3 ]

numbers[0] ='hello world'

console.log(numbers)


// add new element  splice ( position  , element should be remove , the new element)
numbers.splice(2 , 0 , 3 )

console.log(numbers)