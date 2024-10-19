import imageOne from "./img/findUs.png"
export const contactPageLoad = function() {
    const contentDiv = document.getElementById("content");
    let contactContainer = document.createElement("div");
    let contactDetails = document.createElement("p");
    let findUs = document.createElement("img");

    findUs.src = imageOne;
    contactContainer.id = "contactContainer";
    contactDetails.textContent = "Find us here at our main branch in Hateno Village!"
    contactContainer.append(contactDetails, findUs);
    contentDiv.append(contactContainer);
}