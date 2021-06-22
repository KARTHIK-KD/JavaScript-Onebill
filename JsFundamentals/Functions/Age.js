function CheckAge(age){
    if(age>18){
        return true;
    }
    else{
        return confirm("Parent permission is there ");
    }
}


var age=prompt("Enter your age ");
if(CheckAge(age)){
    alert("permission Granted...")
}
else{
    alert("Permiossion Not Granted...")
}