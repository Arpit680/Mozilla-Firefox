function validateemail(emailID){
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(emailID.value.match(mailformat)){
        document.form145.email.focus;
        return true;
    }
    else{
        alert("Invalid Email Address")
        document.form145.email.focus;
        return false;
    }
}