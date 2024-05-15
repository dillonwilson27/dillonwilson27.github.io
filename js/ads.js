
function createAd(pane, ad){
    let adElement= document.createElement("div");

    adElement=styleAd(adElement);

    pane.appendChild(adElement);
}

function styleAd(adElement){
    adElement.style.background = "red";
    adElement.style.width = "11vw";
    adElement.style.height = "5vw";
    adElement.style.marginLeft ="1vw"
    return adElement;
}

createAd(document.getElementById("left-ad-pane"),0);