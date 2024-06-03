const pages = [
    {name:"The Real Reason Mice Exist",href:"mice.html"},
    {name:"The Great Sock Conspiracy: How Missing Socks Fuel a Secret Dimensional Portal",href:"ai.html"},
    {name:"Why Armidillodos arent real",href:"index.html"},
    {name:"[REDACTED]",href:"redacted.html"},
]

function generatePagesView(ul){
    for(let page of pages){
        let listItem = document.createElement("li")

        let linkEl = document.createElement("a");
        linkEl.setAttribute("href",page.href);
        linkEl.innerHTML = page.name;

        linkEl.classList.add("links-link");

        listItem.classList.add("links-list-item");

        listItem.appendChild(linkEl);

        ul.appendChild(listItem);
    }
}

class LinksElement extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        this.classList.add("links")

        let h3 = document.createElement("h3");
        h3.innerHTML = "Other Articles"

        let ul = document.createElement("ul");

        this.appendChild(h3);
        this.appendChild(ul);
        generatePagesView(ul)
    }
}

customElements.define("links-display", LinksElement);

