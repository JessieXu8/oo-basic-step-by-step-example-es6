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

    teach(order) {
        return `${super.introduce()} I am a Teacher. I teach ${order}.`;
    }
}

module.exports={
    Teacher
}

