
class Class {

    constructor(number){
        this.number = number;
        this.leader;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }


    assignLeader(student) {
        //if (student.klass.number === this.number)
        if (student && student.klass.equal(this)) {//this指向当前的student对象中的klass对象即student.klass
            this.leader = student;
        }
    }
    equal(klass) {
        return klass && this.number == klass.number;//this指向当前类
    }

    isLeader(student) {//student的equal方法判断当前这个学生所在的班是否等于班长所在的班
        return this.leader && student && student.equal(this.leader);
    }
}

module.exports={
    Class
}
