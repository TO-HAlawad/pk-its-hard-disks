const coverBG = document.getElementById('cover-img');
window.addEventListener('scroll', function () {
    coverBG.style.backgroundSize = 140 - +window.scrollY / 12 + '%';
    coverBG.style.opacity = 1 - +window.scrollY / 900 + '';
});

const parallaxBG1 = document.querySelector('#BG-img1');
const parallaxBG2 = document.querySelector('#BG-img2');
const parallaxBG3 = document.querySelector('#BG-img3');
const parallaxBG4 = document.querySelector('#BG-img4');
const parallaxBG5 = document.querySelector('#BG-img5');
window.addEventListener("scroll", function () {
    let offset = window.scrollY;
    parallaxBG1.style.backgroundPositionY = offset / -8 + "px";
    parallaxBG2.style.backgroundPositionY = offset / -8 + "px";
    parallaxBG3.style.backgroundPositionY = offset * -1.5 + "px";
    parallaxBG4.style.backgroundPositionY = offset * -1.3 + "px";
    parallaxBG5.style.backgroundPositionY = offset * -1.4 + "px";
});

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 8)) {
            current = section.getAttribute('id')
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    });
});