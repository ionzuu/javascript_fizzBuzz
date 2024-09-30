// Task 2: FizzBuzz
// Write a function that iterates numbers from 1 to 100. For multiples of 3, 
// print "Fizz", for multiples of 5, print "Buzz", and for multiples of both 3 
// and 5, print "FizzBuzz".

function fizzBuzz(){
    for(var i = 0; i < 101; i++){
      if (i%3 === 0){
        if(i%5 === 0){
          console.log("FizzBuzz")  
        }
        console.log("Fizz") 
      }
      
      if (i%5 === 0){
        if(i%3 === 0){
          console.log("BuzzFid")  
        }
        console.log("Buzz")
      }
  
    }
  }
  
  fizzBuzz()