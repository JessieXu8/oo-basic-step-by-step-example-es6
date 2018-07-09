const {Person} = require('./person')
const {Class} = require('./class')

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass.isLeader(this)) {//如果当前学生的id和leader的id相等就是leader
            return `${super.introduce()} I am a Student. I am Leader of ${this.klass.getDisplayName()}.`;
        }
        return `${super.introduce()} I am a Student. I am at ${this.klass.getDisplayName()}.`;
    }
    //判断当前学生的id和传入的学生的id是否相等
    equal(student) {
        return student && this.id === student.id;
    }
}

module.exports={
    Student
}
