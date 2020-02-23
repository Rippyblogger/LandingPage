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

    const isInViewport = function(section) {
        var bounding = currentSection.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
    };
  
  
//test for presence of active class in all li elements. If present, remove from sibling elements.
     
  
    sectionsList.onclick = function() {
        let test = document.querySelector('.active');
        if (test !== null){
            test.classList.remove('active');
    }
    currentSection = document.querySelector(`[data-nav="${this.id}"]`);
    
    

     // on scroll add active class
     window.addEventListener('scroll', function(event) {
        if (isInViewport(currentSection)) {
            currentSection.classList.add('active'); 
        }
    }, false);

    newClass(this);


    };
    uls.appendChild(sectionsList);
  
}
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


