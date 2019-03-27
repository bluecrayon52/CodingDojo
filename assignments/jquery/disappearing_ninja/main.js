$(document).ready(() => {
    $('img').click((e) => {
        // console.log('clicked!');
        $(e.target).hide();
    });

    $('button').click(() => {
        $('img').show();
    });
});