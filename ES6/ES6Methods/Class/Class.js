class Person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    getFullName(){
        return fname+" "+lname;
    }
}

var person=new Person('Karthik','Dharman',22);
console.log(person);//get full class
console.log(person.fname);//get pariculare property

var fullname=new Person.getFullName();
console.log(fullname);