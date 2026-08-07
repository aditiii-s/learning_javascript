//singleton js--- 
//const tinderUser=new Object()

//NON SINGLETON 
/* ----    const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="samay raina "
tinderUser.isLoggedIn=false

console.log(tinderUser);   --------------*/
const regularuser={
    email:"samay@gmail.com",
    fullname:{
        userfullname:
        {
            firstname:"aadvik",
            lastname:"singh"
        }


    }
}
//console.log(regularuser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",2:"b"}//3-->key,a-->value 
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}-->object k andar obj print kr dega 
//const obj3=object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}//--> "..."-->spread feature k use hua hai 
console.log(obj3);