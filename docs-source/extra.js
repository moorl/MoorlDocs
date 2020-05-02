$('.md-content p > img').each(function () {
    let url = this.src;
    let alt = this.alt;

    $(this).wrap('<a data-fancybox="gallery" title="' + alt + '" href="' + url + '"></a>');
});
