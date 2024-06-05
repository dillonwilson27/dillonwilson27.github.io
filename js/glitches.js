const redactedContent = document.querySelector(".generate-redacted");
let blurAmt = 0;

const wordlist =[
    "Help",
    "Nope",
    "Womp Womp",
    "Wow i can code in js!!!",
    "You should try temple os",
    "I use arch btw",
    "███████ ███ █████ ███",
];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createGlitch(){
    let el = document.createElement("div")
    el.classList.add("glitch");
    el.style.top=getRandomInt(100)+"%";
    el.style.left=getRandomInt(100)+"vw";
    el.style.width=getRandomInt(200)+"px";
    el.style.height=getRandomInt(200)+"px";
    document.body.appendChild(el);
}

function generateRedacted(){
    for (let i = 0; i < 500; i++) {
        let str = "";
        for(let j=0;j<getRandomInt(10)+1;j++){
            str+="█";
        }
        redactedContent.innerHTML+=str+" ";
        if (getRandomInt(10)===2){
            redactedContent.innerHTML+="<br>";
        }
    }
}

function randomizeGlitchText(){
    let glitches = document.querySelectorAll(".glitch");
    [].forEach.call(glitches, function(glitch) {
        glitch.innerHTML="";
        for (let i = 0; i < 20; i++) {
            let str = "";
            for(let j=0;j<getRandomInt(10)+1;j++){
                str+=wordlist[getRandomInt(wordlist.length)]+" ";
            }
            glitch.innerHTML+=str+"<br>";
        }
    });
}


setInterval(createGlitch,1000);
setInterval(randomizeGlitchText,100);
generateRedacted()