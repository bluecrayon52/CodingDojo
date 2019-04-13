 // listen for when the #new_msg_btn element is clicked
 $(document).ready(function(){
    $('#new_msg_form').submit(function(){
        $.ajax({
            url: '/messages/new',
            method: 'POST',
            data: $('#new_msg_form').serialize()
        })
        .done(function(response){
            $('#new_msg_form').html(response)
        }).always(function() {
            $.ajax({
                url: '/get_msg_count',
                method: 'GET'
            }).done(function(response) {
                $('#send_msg_head').html(response)
            })
        })
    // return false to disable the normal submission of the form
    return false;
    })
 });