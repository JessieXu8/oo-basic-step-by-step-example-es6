
const {Person} = require('./person')
const {Student} = require('./student')
class Teacher extends Person{
    constructor(name,age,klass) {
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if (this.klass === undefined){
            return super.introduce()+' I am a Teacher. I teach No Class.';
        }else{
            return super.introduce()+' I am a Teacher. I teach Class '+this.klass.number+'.';
        }
    }
    introduceWith(student){
        if (student.klass === this.klass){
            return super.introduce()+' I am a Teacher. I teach '+student.name+'.';
        }else{
            return super.introduce()+' I am a Teacher. I don\'t teach '+student.name+'.';
        }
    }
}
module.exports = {
    Teacher
}

