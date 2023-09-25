let f = (arr) => {

    console.log(arr);
}

let y = ['red' , 'green' , 'blue'];
f(y);


console.log('==============Task 2 =================');


let person = {
    name : "hussein" ,
    age : 23,

    fullname : function getfullname(){
        return this.name ;
    }
}

let fullname = person.fullname();

console.log(fullname);


console.log('==============Task 3 =================');


function add (x,y){

    return x + y ;
}

console.log(add(20,90));
