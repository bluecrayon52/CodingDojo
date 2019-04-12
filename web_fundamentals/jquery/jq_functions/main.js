$(document).ready(() => {
    $('.click button').click(() => {
        $('.click .c1').toggle(1000);
    });

    $('.hide_show .hide_btn').click(() => {
        $('.hide_show .hide, .hide_show img').hide(1000);
        $('.hide_show .show').show(1000);
    });

    $('.hide_show .show_btn').click(() => {
        $('.hide_show .show').hide(1000);
        $('.hide_show .hide, .hide_show img').show(1000);
    });

    $('.slide_up_down .down_btn').click(() => {
        $('.slide_up_down .down').slideUp(1000);
        $('.slide_up_down .up, .slide_up_down img').slideDown(1000);
    });

    $('.slide_up_down .up_btn').click(() => {
        $('.slide_up_down .up, .slide_up_down img').slideUp(1000);
        $('.slide_up_down .down').slideDown(1000);
    });

    $('.toggle button').click(()=> {
        $('.toggle img').toggle(1000);
        $('.toggle div .t1').toggle(1000);
        $('.toggle div .t2').toggle(1000);
    });

    $('.slide_toggle button').click(() => {
        $('.slide_toggle img').slideToggle(1000);
    });

    $('.fade_in_out .in_btn').click(() => {
        $('.fade_in_out .in').fadeOut(1000, () => {
            $('.fade_in_out .out, .fade_in_out img').fadeIn(1000);
        });
    });

    $('.fade_in_out .out_btn').click(() => {
        $('.fade_in_out .out, .fade_in_out img').fadeOut(1000, () => {
            $('.fade_in_out .in').fadeIn(1000);
        });
    });

    $('.add_remove_class .add_btn').click(() => {
        $('.add_remove_class .add').hide(1000,() => {
            $('.add_remove_class p').addClass(() => {
                $('.add_remove_class .remove').show(1000,() => {
                });
                return 'new_class';
            });
        });
    });

    $('.add_remove_class .remove_btn').click(() => {
        $('.add_remove_class .remove').hide(1000,() => {
            $('.add_remove_class p').removeClass(() => {
                $('.add_remove_class .add').show(1000);
                return 'new_class';
            });
        });
    });

    $('.before_after .before_btn').click(() => {
        $('.before_after .before_btn').hide();
        $('.before_after .after_btn').show();
        $('.before_after .before').replaceWith(
            "<p class='after'>The .after() and .insertAfter() \
            methods perform the same task. The major difference is in the syntax—specifically, in the placement \
            of the content and target. With .after(), the content to be inserted comes from the method's argument: \
            $(target).after(contentToBeInserted). With .insertAfter(), on the other hand, the content precedes the \
            method and is inserted after the target, which in turn is passed as the .insertAfter() method's argument: \
            $(contentToBeInserted).insertAfter(target).</p>"
        );
        $('.before_after div').before("<p>I'm inserted before!</p>");
    });

    $('.before_after .after_btn').click(() => {
        $('.before_after .after_btn').hide();
        $('.before_after .before_btn').show();
        $('.before_after .after').replaceWith(
            "<p class='before'> The .before() and .insertBefore() \
            methods perform the same task. The major difference is in the syntax—specifically, in the placement \
            of the content and target. With .before(), the content to be inserted comes from the method's argument: \
            $(target).before(contentToBeInserted). With .insertBefore(), on the other hand, the content precedes the \
            method and is inserted before the target, which in turn is passed as the .insertBefore() method's argument: \
            $(contentToBeInserted).insertBefore(target).</p>"
        );
        $('.before_after div').after("<p>I'm inserted after!</p>");
    });

    $('.append button').click(() => {
        $('.append div').append("<img class='little_pickle' src='./images/pickle-rick.png' alt='a pic of pickle rick'>");
    });

    $('.html button').click(() => {
        $('.html button').hide();
        let txt = $('.html').html();
        $('.html div').append("<p class='html_txt'></p>");
        $('.html .html_txt').text(txt);
    });

    $('.attr button').click(() => {
        $('.attr button').hide();
        let attr = $('.attr p').attr("testing");
        $('.attr div').append("<p class='attr_txt'></p>");
        $('.attr .attr_txt').text(`Attribute Value: ${attr}`);
    });

    $( "select" ).change(function() {
        var singles = $( "#single" ).val();
        var multiples = $( "#multiple" ).val() || [];
        $( ".val_txt" ).html( "Single: " + singles +
          ",  Multiple: " + multiples.join( ", " ) );
    })
});
