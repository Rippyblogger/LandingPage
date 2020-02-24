/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
//Get list of all sections, declare the first unordered list to be used as a container for li nodes later.
const sections = document.querySelectorAll("section");
const uls = document.querySelector("ul");

function newClass(sectionsList) {
    //console.log(sectionsList.classList);
    sectionsList.classList.add("active");
}
//loop through all the sections, get data attribute, use as list text
for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    let sectionData = sections[i].getAttribute("data-nav");
    const sectionsList = document.createElement("li");
    sectionsList.setAttribute("id", sectionData);
    sectionsList.textContent = sectionData;
    sectionsList.innerHTML = `<a onClick="newClass" href="#${sections[i].id}">${sections[i].id}</a>`;


    //logic borrowed from https://gist.github.com/jjmu15/8646226
    const isInViewport = function(section) {
        var rect = currentSection.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || html.clientHeight) &&
            rect.right <= (window.innerWidth || html.clientWidth)
        );
    };


    //test for presence of active class in all li elements. If present, remove from sibling elements.


    sectionsList.onclick = function() {
        let test = document.querySelector('.active');
        if (test !== null) {
            test.classList.remove('active');
        }
        currentSection = document.querySelector(`[data-nav="${this.id}"]`);



        // on scroll add active class and remove from sections not in viewport
        window.addEventListener('scroll', function(event) {
            if (isInViewport(currentSection)) {
                currentSection.classList.add('active'); 
            } else {
                currentSection.classList.remove('active'); 

            }
        }, false);

        newClass(this);


    };
    uls.appendChild(sectionsList);

}