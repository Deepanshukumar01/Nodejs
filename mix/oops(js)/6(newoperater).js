/* isko constructor bhi bolte hai or constructor kuch bhi return nhi krte hai and
starts with capital letter*/

function Student(name,age){
    // new keyword se hi this ki value window se change hoge function name ho jati hai 
    this.name=name;
    this.age=age;
    console.log(this)
}
Student.prototype.talk=function(){
    return console.log(`${name} this side`)
}
let s1=new Student("deepanshu",21)
let s2=new Student("ashwani",21)
//let s3= Student("ashish",21)// agr aisa kroge to this mei global object jayega

console.log(s1.talk===s2.talk)//ab true dega because ab methode indivisiual nhi hai prototype bn chuke hai
//ab isme koi kmi nhi hai bs isse bhi best method hai classes ka 



