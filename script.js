/*scrolling down navigator bar change theme*/
window.addEventListener('scroll', function (){
    let header = document.querySelector('.nav');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

/*navigator bar responsive*/ 
const bar = document.querySelector(".bar");
const sidenav = document.querySelector(".sidenav");

$(document).ready(function(){
    /*navigator bar*/ 
    $(".bar").click(function(){
        $(".sidenav").slideToggle("slow");
    });
    $(window).resize(function(){
        if ($(window).width() > 850) {
            // alert("da");
            $(".sidenav").addClass("displayBlock");
        }
        else {
            $(".sidenav").removeClass("displayBlock");
        }
    });
    $(".wrapper").click(function(){
        $(".icon").toggleClass("close");
    });
    $('.sidenav a').on('click', function(e){
        if(this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top 
            },600,"linear"
            );
        }
    });
    $('#arrow-down').on('click', function(e){
        if(this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top 
            },600,"linear"
            );
        }
    });
});

/*Type.js for making typing animation*/
var typed = new Typed('#type', {
    strings: ['Front-end Developer','Creator'],
    smartBackspace: true,
    loop: true,
    typeSpeed: 95,
    fadeOut: true
});