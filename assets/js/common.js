function validateEmail($email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test( $email );
}

$(function(){
	$("#nic").mask("00000-0000000-0");
	$("#contact").mask("00000000000");
	$("#email").on('keyup', function(){
		if(validateEmail($(this).val())){
			$(this).removeClass("incorrect-format");
		}else{
			$(this).addClass("incorrect-format");
		}
	});
});