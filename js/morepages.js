const linkView=document.querySelector(".links>ul")

const pages = [
    {name:"The Real Reason Mice Exist",href:"mice.html"},
    {name:"The Great Sock Conspiracy: How Missing Socks Fuel a Secret Dimensional Portal",href:"ai.html"},
    {name:"Why Armidillodos arent real",href:"index.html"},
    {name:"[REDACTED]",href:"redacted.html"},
]

function generatePagesView(){
    for(let page of pages){
        let listItem = document.createElement("li")

        let linkEl = document.createElement("a");
        linkEl.setAttribute("href",page.href);
        linkEl.innerHTML = page.name;

        linkEl.classList.add("links-link");

        listItem.classList.add("links-list-item");

        listItem.appendChild(linkEl);

        linkView.appendChild(listItem);
    }
}

generatePagesView()