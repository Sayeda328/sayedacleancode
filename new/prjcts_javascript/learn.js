function data(){
    return `the info ${person1}`;
}
let person1 = {
    name:"abc",
    age:20,
   
};


const{name, age} = person1;
console.log(data(person1));