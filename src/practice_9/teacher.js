const {Person} = require('./person')
const {Class} = require('./class')
class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass) {
            return this.teach(this.klass.getDisplayName());
        } else {
            return this.teach("No Class");
        }
    }
    introduceWith(student) {
        if (student.klass.number === this.klass.number) {
            //My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.
            return `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
        }else{
            return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
        }
    }
    teach(order) {
        return `${super.introduce()} I am a Teacher. I teach ${order}.`;
   }
}

module.exports={
    Teacher
}
