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
console.log(sections);
const uls = document.querySelector("ul");
currentSection = document.querySelector(`[data-nav="${this.id}"]`);

function newClass(sectionsList) {
  //console.log(sectionsList.classList);
  sectionsList.classList.add("active");
}
//logic borrowed from https://gist.github.com/jjmu15/8646226
const isInViewport = function(section) {
  var rect = section.getBoundingClientRect();
  console.log(rect.top, rect.left, rect.bottom, rect.right, window.innerHeight);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight + 150 || document.documentElement.clientHeight) &&
    rect.right <=
      (window.innerWidth + 150 || document.documentElement.clientWidth)
  );
};

//loop through all the sections, get data attribute, use as list text
for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  let sectionData = section.getAttribute("data-nav");
  const sectionsList = document.createElement("li");
  sectionsList.setAttribute("id", sectionData);
  sectionsList.textContent = sectionData;
  sectionsList.innerHTML = `<a onClick="newClass" href="#${section.id}">${section.id}</a>`;

  

  //test for presence of active class in all li elements. If present, remove from sibling elezments.

  sectionsList.onclick = function() {
    let test = document.querySelector(".active");
    if (test !== null) {
      test.classList.remove("active");
    }

    newClass(this);
  };
  // on scroll add active class and remove from sections not in viewport
  

  uls.appendChild(sectionsList);
}
document.addEventListener("scroll", () => {
    for (let index = 0; index < sections.length; index++) {
      if (isInViewport(sections[index])) {
        sections[index].classList.add("active");
      } else {
        sections[index].classList.remove("active");
      }
    }
  });