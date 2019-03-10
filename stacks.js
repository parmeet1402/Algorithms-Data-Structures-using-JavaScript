/* Stacks */
/* 
    Last In First Out
    functions: Push, pop, peek, length
*/

// checking stack to check whether a string is a palindrome or not
let letters = []; // stack
let word = "AbvbA";
let rword = "";

// push operation on stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop operation on stack
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}

// create a stack from scratch
class Stack {
  constructor() {
    this.count = 0; //  How many items are present in the stack
    this.storage = {}; // Empty object
  }

  // Push function
  // adds value to the end of stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Pop function
  // removes and returns value from the end of stack
  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // Size function
  // returns the count of stack
  size() {
    return this.count;
  }

  // Peek function
  // returns the value at the end of stack
  peek() {
    return this.storage[this.count - 1];
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());