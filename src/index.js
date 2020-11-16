import './stylesheets/index.css';
import './bootstrap/bootstrap.min.css';
var $ = require( "jquery" );
var jQuery = require("jquery-easing");

function scrollTrigger() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 100)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 100
    });

    const closeMobileMenu = function () {
        // Close mobile navigation options when not at top.
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    closeMobileMenu(); 
    $(window).scroll(closeMobileMenu);
}

function fetchLastUpdate() {
    const desiredRepo = "website";
    const dateTagClass = ".last-git-update";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let repos = JSON.parse(this.responseText);

            repos.forEach((repo) => {
                if (repo.name === desiredRepo) {
                    var lastUpdated = new Date(repo.updated_at);
                    $(dateTagClass).text(`Last updated: ${lastUpdated}`);
      
                }
            });
        }
    };
    xhttp.open("GET", "https://api.github.com/users/klu17/repos", true);
    xhttp.send();
}
fetchLastUpdate()
scrollTrigger()
