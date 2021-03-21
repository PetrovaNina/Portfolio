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

const openModal = () => {
    const tiles = document.querySelectorAll(".project-tile");
    for (const tile of tiles) {
        tile.querySelector(".open-modal").onclick = () => {
            document.querySelector(".modal").classList.add("active");
            createModalContent(tile);
            closeModal();
        }
    }
}
openModal();

const closeModal = () => {
    document.querySelector(".close-modal").onclick = () => {
        document.querySelector(".modal-content").remove();
        document.querySelector(".carousel").remove();
        document.querySelector(".modal").classList.remove("active");
    }
}

const makeElement = (tagName, tagClass, innerText, attributes) => {
    const element = document.createElement(tagName);
    if (tagClass) {
        element.classList.add(tagClass);
    }
    if (innerText) {
        element.textContent = innerText;
    }
    if (attributes) {
        for (let key in attributes) {
            element.setAttribute(key, attributes[key])
        }
    }
    return element;
}

const createModalContent = (element) => {
    const description = projectsDescription[element.getAttribute("id")];
    const container = document.querySelector(".modal-container");
    container.appendChild(makeElement("div", "carousel"));
    container.appendChild(makeElement("div", "modal-content"));

    const carousel = container.querySelector(".carousel")
    const mainImgUrl = element.querySelector(".project-pic").style.backgroundImage.slice(5, -2);
    carousel.appendChild(makeElement("img", "modal-main-image", "", { "src": mainImgUrl }));


    const modalContent = container.querySelector(".modal-content");
    modalContent.appendChild(makeElement("h3", "modal-project-title", element.querySelector(".project-title").innerHTML));
    modalContent.appendChild(makeElement("p", "modal-project-summary", element.querySelector(".project-summary").innerHTML));
    modalContent.appendChild(makeElement("h4", "modal-project-success", "Accomplishments"));
    modalContent.appendChild(makeElement("ul"));

    const list = container.querySelector("ul");
    const listIlems = description.accomplishments;
    for (let i = 0; i < listIlems.length; i++) {
        list.appendChild(makeElement("li", "", listIlems[i]));
    }

    modalContent.appendChild(makeElement("a", "btn", "View site", {
        "href": description.siteLink,
        "target": "blank"
    })).classList.add("modal-site-link");
}