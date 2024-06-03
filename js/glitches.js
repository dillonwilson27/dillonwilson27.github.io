function createGlitch(){
    let el = document.createElement("div")
    el.classList.add("glitch");
    el.style.top=getRandomInt(100)+"vh";
    el.style.left=getRandomInt(100)+"vw";
    el.style.width=getRandomInt(200)+"px";
    el.style.height=getRandomInt(200)+"px";
    document.body.appendChild(el);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

setInterval(createGlitch,1000);