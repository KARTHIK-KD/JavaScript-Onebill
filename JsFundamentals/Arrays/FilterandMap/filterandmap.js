var array=[10,20,30,40,50,60];

//Filter Method
var afterfilter=array.filter(function(value,index){
    if(value>20){
        return true;
    }
    else{
        return false;
    }
});

document.write(array);
document.write(afterfilter);


// maping method
var aftermapping=array.filter(function(value,indes){
    value=value+20;
    return value;
});

document.write(aftermapping);
document.write(array);