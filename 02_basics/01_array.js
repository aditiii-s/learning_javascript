//ARRAY
const myArr=[0,1,2,3,4,5]
//alg tarika of declaring yaad rkho yha comma nhi lgta 
const myheros=["wonderwoman","ironman","captain america ","black widow"]
//console.log(myArr[1]);
//ARRAY METHODS 
//push and pop method 
//myArr.push(8)
//myArr.push(18)
//myArr.unshift(9)//aage ek add kr dega ele
//myArr.shift()//vo aage wala element hata dega 

//console.log(myArr);
//join is used to convert array into string type 
const newArr= myArr.join();
//console.log(newArr);

//TO KNOW THE TYPE THAT JOIN ACTUALLY CONVERTED IT INTO STRING WE USE TYPEOF 
//console.log(typeof(newArr));//gives strings 

//SLICE -- JO SIRF VO ARRAY K ELEMENTS PRINT KRWATA HAI 
//SPLICE --JO DIRECT ARRAY MEI HI CHANGES KRTA HAI 

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr)

//splice k liye alg array bnao 
const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);