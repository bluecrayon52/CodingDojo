$(document).ready(() => {
    $('img').hover((e) => {
        let oldSrc = $(e.target).attr('src');
        $(e.target).attr('src',$(e.target).attr('data-alt-src'));
        $(e.target).attr('data-alt-src', oldSrc);
    });
});