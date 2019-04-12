$(document).ready(function(){
    $('#email').keyup(function(){
        console.log('-------keyup!-------s')
        var data = $("#reg_form").serialize()   // capture all the data in the form in the variable data
        $.ajax({
            method: "POST",   // we are using a post request here, but this could also be done with a get
            url: "/email_check",
            data: data
        })
        .done(function(res){
             $('#email_msg').html(res)  // manipulate the dom when the response comes back
        })
    })
});