/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    let born = new Date(1991,11,20,0,0,0),
        birth = new Date();

    birth = new Date() - born.getTime();
    birth = new Date(birth);
    birth = Math.abs(birth.getUTCFullYear() - 1970);
    
    $('.age').append(document.createTextNode(birth));

    let copyright = new Date().getUTCFullYear();
    $('#copyright').append(document.createTextNode(copyright));

});