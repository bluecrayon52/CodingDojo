$(document).ready(() => {
    $('img').click((e) => {
        let oldSrc = $(e.target).attr('src');
        $(e.target).attr('src',$(e.target).attr('data-alt-src'));
        $(e.target).attr('data-alt-src', oldSrc);
    });
});