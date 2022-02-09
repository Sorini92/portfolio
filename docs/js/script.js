const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click',() => {
    menu.classList.add('active');
});

closeElem.addEventListener('click',() => {
    menu.classList.remove('active');
}); 

overlay.addEventListener('click',() => {
    menu.classList.remove('active');
}); 

document.addEventListener('keydown', (e) => {
    if ((e.code === "Escape" && menu.classList.contains('active'))) {
        menu.classList.remove('active');
    } 
})
//пересчет процентов
const counters = document.querySelectorAll('.skills__lines-perc'),
    lines = document.querySelectorAll('.skills__lines-divider-line');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//smooth scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
