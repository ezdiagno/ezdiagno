// JavaScript Document

<!-- 
//Browser Support Code
function contact_form()
{
	var email = document.getElementById('email').value;   

	$.ajax(
	{
		type: “POST”,
		url: “https://mandrillapp.com/api/1.0/messages/send.json”,
		data: 
		{
			‘key’: ‘ouQ9d2s4hE-5QqzBwZHUMw’,
    		‘message’: {
      	‘from_email’: 'info@ezdiagno.com',
      	‘to’: 
      	[
          {
            ‘email’: email
            ‘type’: ‘to’
          }
			],
		‘autotext’: ‘true’,
      ‘subject’: ‘EZdiagno Received Your Enquiry’,
      ‘html’: ‘<b>Dear Sir/ Mam</b><br/><br/><br/>Thank you for getting in touch with us. We appreciate your time.<br/>Our team member will get back to you shortly on your query/comment.<br/><br/><br/>Thanks and Regards<br/>Team Ezdiagno’
		}
	}
}).done(function(response) 
{
	var ajaxDisplay = document.getElementById('Msg'); /// Msg is a div userd for message display
	ajaxDisplay.innerHTML = 'Thank you for registering with EZdiagno. We will be looking forward to your further engagement';
});
	
	$.ajax(
	{
		type: “POST”,
		url: “https://mandrillapp.com/api/1.0/messages/send.json”,
		data: 
		{
			‘key’: ‘ouQ9d2s4hE-5QqzBwZHUMw’,
    		‘message’: {
      	‘from_email’: email,
      	‘to’: 
      	[
          {
            ‘email’: 'ezdiagno@gmail.com'
            ‘type’: ‘to’
          },
          {
            ‘email’: 'info@ezdiagno.com'
            ‘type’: ‘to’
          }
			],
		‘autotext’: ‘true’,
      ‘subject’: ‘Enquiry from website’,
      ‘html’: ‘Enquiry from email-id: ’+email
		}
	}
});

	document.getElementById('email').value = "";
}
//-->
