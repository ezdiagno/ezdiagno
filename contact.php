<?php


$Email = $_GET['email'];


if (!preg_match("/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/i", $Email))
{
	echo "SORRY";
}
else{

	
	$to = "$Email";
   	$subject = "We Have Received Your Enquiry";
   	$message = "<b>Dear Sir/ Mam</b><br/><br/><br/>";
   	$message .= "
		Thank you for getting in touch with us. We appreciate your time.<br/> 
        Our team member will get back to you shortly on your query/comment.<br/><br/><br/>
		Thanks and Regards<br/>
		Team Ezdiagno
		";
   	$header ='From:ezdiagno@gmail.com' . " " .
				'Reply-To:ezdiagno@gmail.com' . " " .
				'X-Mailer: PHP/' . phpversion();
	//$header = "Bcc:vaibhav@shadowfax.in \r\n";
   	$header .= "MIME-Version: 1.0\r\n";
   	$header .= "Content-type: text/html\r\n";
  	$retval = mail ($to,$subject,$message,$header,'-fezdiagno@gmail.com');
   	if( $retval == true )
   	{
   		$to = "ezdiagno@gmail.com";
   		$subject = "Enquiry";
   		$message = "Email  : $Email";
   		$header = "From:$Email \r\n" . " ".
					'Reply-To:ezdiagno@gmail.com' . " " .
				'X-Mailer: PHP/' . phpversion();;
		//$header = "Bcc:vaibhav@shadowfax.in\r\n";
   		$header .= "MIME-Version: 1.0\r\n";
   		$header .= "Content-type: text/html\r\n";
  		$retval = mail ($to,$subject,$message,$header, "-f$Email");
   		if( $retval == true )
   		{
   			echo "Thank You";
   		}
   		else
   		{
    		echo "Try Again Later...";
			
   		}
   	}
   	else
   	{
    	echo "Try Again Later...";
   	}

}
?>
