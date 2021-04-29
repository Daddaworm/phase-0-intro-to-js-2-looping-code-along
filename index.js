
//for loop
//Create a for loop with a counter that starts at 0 and increments at the end of each loop. The condition should halt the for loop after the last name in the array is printed out in the loop body.

//Inside the loop, create a custom message for each name from the provided array, thanking that person for their gift. Collect the messages in an array and return this array.
let array = []
function writeCards(names, event){
    for(let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]} for the wonderful ${event} gift!`);
    return array;
    }
}

// while loop
//To get more acquainted with while, your task is to write a function, countDown, that takes in any positive integer and, starting from that number, counts down to zero using console.log(). Note that this means that running countdown(10); would actually log 11 times:
function countDown(i){
    while(i >= 0){
      console.log(i--)
    }
  }