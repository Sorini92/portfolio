const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    overlay = document.querySelector('.menu__overlay');
    blocks = document.querySelectorAll('.skills__item');

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

/* const changeImages = () => {
    const blocks = document.querySelectorAll('.portfolio__item');
    console.log();
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            const back = block.querySelectorAll('.portfolio__item_back'),
                  front = block.querySelectorAll('.portfolio__item_front');
            
            front.forEach(item => item.style.visibility = 'hidden');

            back.forEach(item => item.style.visibility = 'visible');
        });

        block.addEventListener('mouseout', () => {
            const p = block.querySelectorAll('.portfolio__item_back'),
                  front = block.querySelectorAll('.portfolio__item_front');
            
            front.forEach(item => item.style.visibility = 'visible');

            p.forEach(item => item.style.visibility = 'hidden');
        });
    });
};

changeImages(); */

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
