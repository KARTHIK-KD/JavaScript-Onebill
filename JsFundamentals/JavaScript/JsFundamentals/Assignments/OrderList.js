// ORDER LIST PROGRAM 

//create 'ol'-order list
var ol=document.createElement('ol');
ol.textContent='Programming Languages';


//create 'li'-list
var li1=document.createElement('li');
li1.textContent='C';
var li2=document.createElement('li');
li2.textContent='C++';
var li3=document.createElement('li');
li3.textContent="Java";
var li4=document.createElement('li');
li4.textContent="Python";
var li5=document.createElement('li');
li5.textContent="JavaScript";

//append list in orderlist
ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);
ol.appendChild(li4);
ol.appendChild(li5);

document.body.appendChild(ol);