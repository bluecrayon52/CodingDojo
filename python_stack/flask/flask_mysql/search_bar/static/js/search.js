$(document).ready(function(){
    $('#name_search').keyup(function(){
        console.log('KeyUp!')
        var data = $("#search_form").serialize()   // capture all the data in the form in the variable data
        $.ajax({
            method: "GET",   // we are using a post request here, but this could also be done with a get
            url: "/usersearch",
            data: data
        })
        .done(function(res){
             $('#user_results').html(res)  // manipulate the dom when the response comes back
        })
    })
})