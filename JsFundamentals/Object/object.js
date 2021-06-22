var Employee={

    name:"karthik",
    age:20,
    salary:20000

};

//print Object details
document.write(Employee.name);
document.write(Employee.age);
document.write(Employee.salary);

//delete one
delete Employee.age;

//add new
Employee.dob="10/10/2000";
document.write(Employee.dob);
