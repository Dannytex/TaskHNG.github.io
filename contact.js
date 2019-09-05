 // Form validation code
function validate()                              
{ 
    var name = document.forms["contactform"]["Name"];            
    var email = document.forms["contactform"]["Email"];  
    var Subject = document.forms["contactform"]["Subject"]; 
    var message = document.forms["contactform"]["Message"]; 
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name.value == ""  ||  name.value.length != 4 )
    { 
        alert("Please enter your name!"); 
        name.focus(); 
        return false; 
    } 
    if (email.value !==(mailformat))
    {
        alert("You have entered an invalid email address!");
        Email.focus();
        return false;
    }

 
    if (subject.value == "")
    {
        alert("Please enter a Title!"); 
        subject.focus(); 
        return false; 
    }

    if (message.value == ""  ||
            message.value.length != 20 )                                
    { 
        alert("Please enter a message."); 
        message.focus(); 
        return false; 
    }
    return true; 
}

//-->
