function myFunction() {  
   var x,y;
   
   x = document.getElementById("numeroA").value;  
   y = document.getElementById("numeroB").value; 
	   
   var suma =(parseInt(x) + parseInt(y));
   document.getElementById("operacion").innerHTML = suma;  
 }

 
 
 
function myFunction2() {  
   var x,y;  
   x = document.getElementById("numeroA").value;  
   y = document.getElementById("numeroB").value; 
   
   var resta= ( parseInt(x) - parseInt(y));  
   document.getElementById("operacion").innerHTML = resta;  
 } 
 
 
 
 function myFunction3() {  
   var x,y;  
   x = document.getElementById("numeroA").value;  
   y = document.getElementById("numeroB").value; 
   
  
   var dividir= ( parseFloat(x) / parseFloat(y));  
   document.getElementById("operacion").innerHTML = dividir;  
 } 
  
  
function myFunction4() {  
   var x,y;  
   x = document.getElementById("numeroA").value;  
   y = document.getElementById("numeroB").value; 
   
   var potencia=Math.pow( x,y);  
   document.getElementById("operacion").innerHTML =potencia;  
 } 
 
 function myFunction5() {  
   var x,y;  
   x = document.getElementById("numeroA").value;  
   y = document.getElementById("numeroB").value; 
   
   var multiplicar= ( parseInt(x) * parseInt(y));  
   document.getElementById("operacion").innerHTML = multiplicar;  
 } 
 
 
	
 
 function validar(){
	 var  a, b;
	 a=document.getElementById("numeroA").value;
	 b=document.getElementById("numeroB").value;
	  if (a.length==0 || b.length==0){
		window.alert("Por favo llenar los campos vacios")
 }
 }