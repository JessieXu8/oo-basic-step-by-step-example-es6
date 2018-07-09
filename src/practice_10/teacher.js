const { Person } = require('./person')
const { Class } = require('./class')

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce() {
        if (this.klasses === undefined || this.klasses.length === 0)
            return `${super.introduce()} I am a Teacher. I teach No Class.`;
        else
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klasses.map(x => x.number).join(", ")}.`;
    }
    introduceWith(student) {
        let isStudent = this.klasses.some(klass => klass === student.klass);
        if (isStudent) {
            return `${super.introduce()} I am a Teacher. I teach ${student.name}.`;
        } else {
            return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`;
        }
    }
}
module.exports = {
    Teacher
}
