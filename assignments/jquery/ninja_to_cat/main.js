$(document).ready(() => {
    $('img').click((e) => {
        let oldSrc = $(e.target).attr('src');
        $(e.target).attr('src',$(e.target).attr('data-alt-src'));
        $(e.target).attr('data-alt-src', oldSrc);
    });
    // $('img').click(function() {
    //     let oldSrc = $(this).attr('src');
    //     $(this).attr('src', $(this).attr('data-alt-src')); 
    //     $(this).attr('data-alt-src', oldSrc);
    // });
});