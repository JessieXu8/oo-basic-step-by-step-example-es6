class Class{
    constructor(number){
        this.number = number;
        this.leader;
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student){
        if (student && student.klass.equal(this)){
            this.leader = student;
        }else {
            console.log("It is not one of us.")
        }
    }
    equal(klass){
        return klass && this.number === klass.number;
    }

    isLeader(student) {//student的equal方法判断当前这个学生所在的班是否等于班长所在的班
        return this.leader && student && student.equal(this.leader);
    }
    appendMember(student){
        student.klass = this;
    }
}
module.exports={
    Class
}
