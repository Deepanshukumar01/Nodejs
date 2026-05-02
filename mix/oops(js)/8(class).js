// ye best method hai 
class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hi my name is ${name} and age is ${age} `)
    }
}

s1=new student("deepanshu",21)
s2=new student("prashant",21)

console.log(s1.age)
console.log(s1.talk===s2.talk)