$('.md-content p > a').each(function () {
    $(this).attr('target','_blank');
});

$('.md-content p > img').each(function () {
    let url = this.src;
    let alt = this.alt;

    $(this).wrap('<a data-fancybox="gallery" title="' + alt + '" href="' + url + '"></a>');
});

var siteId = '3';
if (typeof window !== 'undefined' && window.location.href.includes('127.0.0.1')) {
    siteId = '1'
}
var _paq = window._paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="//matomo.app-flix.de/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', siteId]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
