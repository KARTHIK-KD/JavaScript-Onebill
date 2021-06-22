function check(n){
    for(i=2;i<n/2+1;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}


var number=prompt("Enter the Number");
var num=check(number);
if(num){
    alert("prime");
}
else{
    alert("Not Prime");
}