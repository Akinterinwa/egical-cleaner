'use strict';
const homePage = document.querySelector('#home-page');
const hamburger = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-button');
const closeSideBar = document.querySelector('#side-bar');
const section1 = document.querySelector('#section1');
const aboutSection = document.querySelector('#about-us');
const cleaning = document.querySelector('#clean-service');
const contact = document.querySelector('#contact');
const section2 = document.querySelector('#section');
const section3 = document.querySelector('#best-solution');
const section4 = document.querySelector('.footer-bottom');
const mobileHome = document.querySelector('#mobile-home');

hamburger.addEventListener('click', function() {
    closeSideBar.classList.remove('hidden');
});

closeButton.addEventListener('click', function() {
    closeSideBar.classList.add('hidden');
});
////////////////////////////////////////////
////scroll to view////////////////////////////////
homePage.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    /*  console.log('clicked correctly');
                                                                                                console.log(s1coords);
                                                                                                console.log(e.target.getBoundingClientRect());
                                                                                                console.log('current scroll (X/Y)', window.pageXOffset, window.pageYoffset);

                                                                                                console.log(
                                                                                                    'height/width viewport',
                                                                                                    document.documentElement.cloentHeight,
                                                                                                    document.documentElement.clientWidth
                                                                                                ); */
    section1.scrollIntoView({ behavior: 'smooth' });
});
aboutSection.addEventListener('click', function(e) {
    const s2coords = section1.getBoundingClientRect();
    section1.scrollIntoView({ behavior: 'smooth' });
});
cleaning.addEventListener('click', function(e) {
    console.log(section3);
    const s3coords = section3.getBoundingClientRect();
    section3.scrollIntoView({ behavior: 'smooth' });
});
contact.addEventListener('click', function(e) {
    const s4coords = section4.getBoundingClientRect();
    section4.scrollIntoView({ behavior: 'smooth' });
});

///////////REVEAL SECTION //////////
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

//////////end of revealing section ////////////////////////
/////////////////////////////////////////////////

////////////HAMBURGER//// scroll  to view\\ //////////
mobileHome.addEventListener('click', function() {
    console.log('mobile-home was clicked');
    closeSideBar.classList.add('hidden');
});

const mobileContact = document.querySelector('#mobile-contact');
const mobileAbout = document.querySelector('#mobile-about');
const mobileCleaning = document.querySelector('#mobile-cleaning');

mobileContact.addEventListener('click', function() {
    closeSideBar.classList.add('hidden');
    section4.getBoundingClientRect();
    section4.scrollIntoView({ behavior: 'smooth' });
});
mobileAbout.addEventListener('click', function() {
    closeSideBar.classList.add('hidden');

    section1.getBoundingClientRect();
    section1.scrollIntoView({ behavior: 'smooth' });
});

mobileCleaning.addEventListener('click', function() {
    closeSideBar.classList.add('hidden');

    section3.getBoundingClientRect();
    section3.scrollIntoView({ behavior: 'smooth' });
});