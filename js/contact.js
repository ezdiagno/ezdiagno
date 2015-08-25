// JavaScript Document


<!-- 
//Browser Support Code
function contact_form(){
 var ajaxRequest;  // The variable that makes Ajax possible!
	
 try{
   // Opera 8.0+, Firefox, Safari
   ajaxRequest = new XMLHttpRequest();
 }catch (e){
   // Internet Explorer Browsers
   try{
      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
   }catch (e) {
      try{
         ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
         // Something went wrong
         alert("Your browser broke!");
         return false;
      }
   }
 }
 // Create a function that will receive data 
 // sent from the server and will update
 // div section in the same page.
 ajaxRequest.onreadystatechange = function(){
   if(ajaxRequest.readyState == 4){
      var ajaxDisplay = document.getElementById('Msg'); /// Msg is a div userd for message display
      ajaxDisplay.innerHTML = ajaxRequest.responseText;
   }
 }
 // Now get the value from user and pass it to
 // server script.
 
 //var name = document.getElementById('name').value;
 //var poc = document.getElementById('poc').value;
 //var phone = document.getElementById('phone').value;
 var email = document.getElementById('email').value; 
 //var address = document.getElementById('address').value;
 //var user_message = document.getElementById('user_message').value;
  
 
 var queryString = "?email=" + email;
 ajaxRequest.open("GET", "contact.php" + queryString, true);
 ajaxRequest.send(null); 
 
 	//document.getElementById('name').value = "";
	//document.getElementById('poc').value = "";
 	//document.getElementById('phone').value ="";
 	document.getElementById('email').value = "";
 	//document.getElementById('address').value ="";
	//document.getElementById('user_message').value = "";
 	

 
}
//-->
