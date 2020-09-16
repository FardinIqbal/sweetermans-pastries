import {renderHome} from "./home";
import {renderAbout} from "./aboutus";
import {renderMenu} from "./menu";

const content = document.querySelector(".content");

const header = document.createElement('header');
content.appendChild(header);

const heading = document.createElement("h1");
heading.textContent = "Sweeterman's Pastries";
heading.classList.add("larger-header")
header.appendChild(heading);

const navbar = document.createElement("nav");
header.appendChild(navbar);

const ul = document.createElement("ul");
ul.classList.add("un-styled-list");
navbar.appendChild(ul);

const homeTab = document.createElement("li");
homeTab.classList.add("home-tab");
homeTab.textContent = "Home";

const aboutUsTab = document.createElement("li");
aboutUsTab.classList.add("about-us-tab");
aboutUsTab.textContent = "About Us";

const menuTab = document.createElement("li");
menuTab.classList.add("menu-tab");
menuTab.textContent = "Menu";

const tabs = [homeTab, aboutUsTab, menuTab];

ul.appendChild(homeTab);
ul.appendChild(aboutUsTab);
ul.appendChild(menuTab);

renderHome();
renderAbout();
renderMenu();

const homeContent = document.querySelector(".home-content");
const aboutUsContent = document.querySelector(".about-us-content");
const menuContent = document.querySelector(".menu-content");

const contents = [homeContent, aboutUsContent, menuContent];

const addInvisible = (contents) => {
    contents.forEach(content => {
        content.classList.add("invisible");
    });
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (){
        addInvisible(contents);
        contents[i].classList.remove("invisible");
    });
}
