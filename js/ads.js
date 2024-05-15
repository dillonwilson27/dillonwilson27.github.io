
function createAd(pane, ad){
    let adElement= document.createElement("div");

    adElement=styleAd(adElement);

    pane.appendChild(adElement);
}

function styleAd(adElement){
    adElement.classList.add("generic-ad");
    return adElement;
}

createAd(document.getElementById("left-ad-pane"),0);