$(document).ready(function() {
    window.addEventListener('scroll', function() {
        const yScroll = window.scrollY;
        document.querySelector('.section').style.transform = "translate3d(" + 0 + ',' + yScroll * -0.15 + "px,0)";
    });
})