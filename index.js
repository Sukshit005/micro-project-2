
 function increment1()
 {
     let number1 = 1 
     let number2 = Number(document.getElementById("count").innerText) ;
     document.getElementById("count").innerText=number1 + number2 ;
 }

     function decrement1()
 {
     let number1 = 1 
     let number2 = Number(document.getElementById("count").innerText) ;
     document.getElementById("count").innerText= number2 - number1 ;
 }

     function increment5()
 {
     let number1 = 5 
     let number2 = Number(document.getElementById("count").innerText) ;
     document.getElementById("count").innerText=number1 + number2 ;
 }

    function increment10()
 {
     let number1 = 10 
     let number2 = Number(document.getElementById("count").innerText) ;
     document.getElementById("count").innerText=number1 + number2 ;
 }

     function decrement10()
 {
     let number1 = 10 
     let number2 = Number(document.getElementById("count").innerText) ;
     document.getElementById("count").innerText=number2 - number1 ;
 }

    function decrement5()
 {
     let number1 = 5 
     let number2 = Number(document.getElementById("count").innerText) ;
     document.getElementById("count").innerText=number2 - number1 ;
 }

     function incrementip()
 {

     let number1 = Number(document.getElementById("number-text1").value);
     let number2 = Number(document.getElementById("count").innerText) ;
     if(document.getElementById("number-text1").value == 0)
     {
         alert("Please Enter the Number to Increase the Value");
     }
     else
     {
         document.getElementById("count").innerText= number1 + number2 ;
     }
     
 }

    function decrementip()
 {

     let number1 = Number(document.getElementById("number-text2").value);
     let number2 = Number(document.getElementById("count").innerText) ;
     if(document.getElementById("number-text2").value == 0)
     {
         alert("Please Enter the Number to Decrease the Value");
     }
     else
     {
         document.getElementById("count").innerText= number2 - number1 ;
     }
     
 }

     function reset()
 {
     
     document.getElementById("count").innerText=0;
 }

