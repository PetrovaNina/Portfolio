const headerPhotoLink = document.querySelector(".header-photo-link");
const burger = document.querySelector(".hamburger");
const navbar = document.getElementById("navbar");
const navlinks = navbar.querySelectorAll(".nav-link");
const tiles = document.querySelectorAll(".project-tile");
const modal = document.querySelector(".modal");
let carousel = modal.querySelector(".carousel");
let modalContent = modal.querySelector(".modal-content");

// NAVIGATION BAR CONDITIONS

// Manipulate navbar on mobile

burger.onclick = () => {
    burger.classList.toggle("active");
    navbar.classList.toggle("active");
}

// Hide navbar after click a link
for (let link of navlinks) {
    link.onclick = () => {
        burger.classList.remove("active");
        navbar.classList.remove("active");
    }
}

highlightLink = (pageID) => {
    removeHighlights(navlinks);

    for (let link of navlinks) {
        if (("#" + pageID) === link.getAttribute("href")) {
            link.classList.add("highlighted");
        }
    }
}

removeHighlights = (list) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].classList.contains("highlighted")) {
            list[i].classList.remove("highlighted");
        }
    }
}

isVisible = (elem) => {

    const elemConditions = elem.getBoundingClientRect();
    const headerHeight = document.querySelector("header").getBoundingClientRect().height;

    // is the larger part of element visible?
    return (elemConditions.top < ((elemConditions.height / 3) + headerHeight) &&
        elemConditions.top > (elemConditions.height / 3 * -2) - headerHeight);
}

window.addEventListener('scroll', () => {
    let currentPage;

    if (isVisible(document.getElementById("welcome-section"))) {
        currentPage = "welcome-section";
        hideHeaderPhoto()
    } else if (isVisible(document.getElementById("about"))) {
        currentPage = "about";
        headerPhotoLink.classList.add("visible");
    } else if (isVisible(document.getElementById("projects"))) {
        currentPage = "projects";
        headerPhotoLink.classList.add("visible");
    } else if (isVisible(document.getElementById("contacts"))) {
        currentPage = "contacts";
        headerPhotoLink.classList.add("visible");
    }

    highlightLink(currentPage);
});

hideHeaderPhoto = () => {
    if (headerPhotoLink.classList.contains("visible")) {
        headerPhotoLink.classList.remove("visible");
    }
}

// CONTENT SECTION CONDITIONS

const projectsDescription = {
    findCat: {
        accomplishments: [
            "Concept generation",
            "Built with JavaScript",
            "Creating and interaction with DOM elements dynamically through JS",
            "Responsive designs",
            "CSS animation"
        ],
        siteLink: "https://petrovanina.github.io/FindCatGame",
    },
    educational: {
        accomplishments: [
            "Concept generation",
            "HTML layouts encoding and styling with CSS Flex and Grid",
            "Fully responsive design including survey form and table",
            "Hover and click actions"
        ],
        siteLink: "https://petrovanina.github.io/educational-organization-website",
    },
    showcase: {
        accomplishments: [
            "HTML layouts encoding and styling with CSS Flex and Grid",
            "Adaptive page layout encoding",
            "Hover and click actions"
        ],
        siteLink: "https://petrovanina.github.io/Online-Store-Showcase",
    },
    techDoc: {
        accomplishments: [
            "HTML layouts encoding",
            "Responsive design",
            "Page sections navigate by clicking the corresponding navbar element"
        ],
        siteLink: "https://petrovanina.github.io/TechDoc-Page",
    },
};

makeElement = (tagName, tagClass, innerText, attributes) => {
    const element = document.createElement(tagName);
    if (tagClass) {
        element.classList.add(tagClass);
    }
    if (innerText) {
        element.textContent = innerText;
    }
    if (attributes) {
        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
    return element;
}

createModalContent = (element) => {
    const description = projectsDescription[element.getAttribute("id")];
    const container = document.querySelector(".modal-container");
    carousel = container.appendChild(makeElement("div", "carousel"));
    modalContent = container.appendChild(makeElement("div", "modal-content"));

    const mainImgUrl = element.querySelector(".project-pic").style.backgroundImage.slice(5, -2);
    carousel.appendChild(makeElement("img", "modal-main-image", "", { "src": mainImgUrl }));


    modalContent.appendChild(makeElement("h3", "modal-project-title", element.querySelector(".project-title").innerHTML));
    modalContent.appendChild(makeElement("p", "modal-project-summary", element.querySelector(".project-summary").innerHTML));
    modalContent.appendChild(makeElement("h4", "modal-project-success", "Accomplishments"));
    modalContent.appendChild(makeElement("ul"));

    const list = container.querySelector("ul");
    const listItems = description.accomplishments;
    for (let i = 0; i < listItems.length; i++) {
        list.appendChild(makeElement("li", "", listItems[i]));
    }

    modalContent.appendChild(makeElement("a", "btn", "View site", {
        "href": description.siteLink,
        "target": "blank"
    })).classList.add("modal-site-link");
}

deleteContent = () => {
    if (modalContent && carousel) {
        modalContent.remove();
        carousel.remove();
    }
}

// 
const setTabIndex = () => {
    const focusableElements = document.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
    for (let i = 0; i < focusableElements.length; i++) {
        if (modal.classList.contains("active")) {
            focusableElements[i].setAttribute("tabindex", "-2");
            modal.querySelector(".modal-site-link").setAttribute("tabindex", "0");

            // Switch focus to the tile after the current one
            if (focusableElements[i] === document.activeElement) {
                focusableElements[i + 2].classList.add("next-focused")
            }
        } else {
            focusableElements[i].setAttribute("tabindex", "0");
            document.querySelector(".next-focused").focus();
            document.querySelector(".next-focused").classList.remove("next-focused");
        }
    }
}

// Open modal window by click or "Enter" key
for (let tile of tiles) {
    const openModal = () => {
        deleteContent();
        modal.classList.add("active");
        createModalContent(tile);
        setTabIndex();
    };

    tile.querySelector(".open-modal").onclick = openModal;

    // Set navigation by "Tab"
    tile.setAttribute("tabindex", "0");
    tile.addEventListener('keydown', (evt) => {
        if (evt.key === "Enter") {
            openModal();
        }
    });
}

// Close modal window by click or "Esc" key

closeModal = () => {
    modal.classList.remove("active");
    setTimeout(deleteContent, 1000);
    setTabIndex();
}

document.querySelector(".close-modal").onclick = closeModal;

document.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape") {
        closeModal();
    }
});