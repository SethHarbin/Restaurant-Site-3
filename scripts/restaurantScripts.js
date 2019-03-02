/*
Created by: Seth Harbin
Created on: 3/2/2019
Last Edited on: 3/2/2019
*/

function contactApprove(){
	clearErrors();
	alert("Information is valid and has not been submitted.");
	return false;
}

function clearErrors() {    
    for (var i = 0; i < document.forms["contactUs"].elements.length; i++) {
        if (document.forms["contactUs"].elements[i].parentElement.className.indexOf("has-") != -1) {
            document.forms["contactUs"].elements[i].parentElement.className = "form-group";
        }
    }    
}