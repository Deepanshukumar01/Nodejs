class person {
    constructor(name, age) {
        console.log("person constructor is calling")
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`${this.name} is talking`)
    }
}
class student extends person {
    constructor(name, age, marks) {
        console.log("student constructor is calling")
        super(name, age)
        this.marks = marks
    }
}
class teacher extends person {
    constructor(name, age, subject) {
        console.log("teacher constructor is calling")
        super(name, age)
        this.subject = subject
    }
}
t1 = new teacher("sir", 40, "math")
t1.talk()