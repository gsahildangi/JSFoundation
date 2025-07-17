function myOuterFun(){
    let counter = 4;
    return function(){
         return counter++
    }
}

let innterFun = myOuterFun();
console.log(innterFun()); //5
console.log(innterFun());  //6
console.log(innterFun());   //7

//it is remembering the value 4 and then increamenting it.
