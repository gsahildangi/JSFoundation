function* generateNumber(){
     yield 1;
     yield 2;
     yield 3;
   
}

// when we use * after function then it will become a generator funciton.

let gen = generateNumber();

console.log(gen.next().value); // one the first call it will give you the yield 1 value and then once yield 
                              //is completed it will go out of bond of array. This next() is a iterator.
console.log(gen.next().value);
console.log(gen.next().value);

let genTwo = generateNumber();
console.log(genTwo.next().value);
console.log(genTwo.next().value);
//It will remember who called it and then again yield 1 will go and on te number of call it will give value
// You can also see that in  output also.

//OutPut:-  
//1
//2
//3
//1
//2