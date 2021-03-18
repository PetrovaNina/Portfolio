const projectsDescription = {
    findCat: {
        accomplishments: [
            "Concept generation",
            "Built with JavaScript",
            "Creating and interaction with DOM elements dynamically through JS",
            "Responsive designs",
            "CSS animation"
        ],
        "View site": "https://petrovanina.github.io/FindCatGame",
    },
    educational: {
        accomplishments: [
            "Concept generation",
            "HTML layouts encoding and styling with CSS Flex and Grid",
            "Fully responsive design including survey form and table",
            "Hover and click actions"
        ],
        "View site": "https://petrovanina.github.io/educational-organization-website",
    },
    showcase: {
        accomplishments: [
            "HTML layouts encoding and styling with CSS Flex and Grid",
            "Adaptive page layout encoding",
            "Hover and click actions"
        ],
        "View site": "https://petrovanina.github.io/Online-Store-Showcase",
    },
    techDoc: {
        accomplishments: [
            "HTML layouts encoding",
            "Responsive design",
            "Page sections navigate by clicking the corresponding navbar element"
        ],
        "View site": "https://petrovanina.github.io/TechDoc-Page",
    },
};

const openModal = () => {
    const tiles = document.querySelectorAll(".project-tile");
    for (const tile of tiles) {
        tile.querySelector(".open-modal").onclick = () => {
            document.querySelector(".modal").classList.add("active");
            closeModal();
        }
    }
}
openModal();

const closeModal = () => {
    document.querySelector(".close-modal").onclick = () =>
        document.querySelector(".modal").classList.remove("active")
}