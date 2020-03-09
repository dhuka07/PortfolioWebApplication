/*
This page contains form validation using Jquery validation plugin
*/

$(document).ready(function() {													//Ready function
	$.validator.addMethod("validEmail",											
    function(value, element) {	
        return value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,6}$/);						//Method for Email Validation	
    },
    "Please Enter proper Email"													//Display Message 
);

	$("#form").validate({														//validating Rules
        rules:{
            fname:{
                required: true,    												//Required for fname
			},
			
			email:{																//Required for Email
				required:true,
				email:true,
				validEmail:true,
			},
			
			messagefrmUser:{													//Required for user Message
				required:true,
				maxlength:[100],
			},
			
		},
		submitHandler: function(form){												//Form Submit Event Handler
            form.submit();
        }

    })		

});																					//End Ready