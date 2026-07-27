//singletone -- jha pei aap change bhi kro toh vo chnge nhi hoga last mei 
// object.create
//object literals 

const mySym = Symbol("key1")

const JsUser={
    name:"aditi ",
    "full name":"aditi singh ",
    [mySym]:"mykey1",
    age:21,
    location:"chhapra",
    email:"aditisingh@gmail.com",
    isLoggedIn:false,

}
//THERE ARE DIFFER METHODS OF WRITING SAME OBJECTS ONE BY USING SQ BRACTES AND ONE WITH USING DOTS 
console.log(JsUser.email)
console.log(JsUser["email"])//the second method 
console.log(JsUser["full name"])

JsUser.greeting= function(){
    console.log("hello JS user");
}
JsUser.greetingtwo= function(){
    console.log(`hello JS user ${this.name}`);//back ticks is used whenever we have to write strings 
    //backticks is present in the starting 
}
//CALLING THE FUNCTION 
JsUser.greeting();
JsUser.greetingtwo();
