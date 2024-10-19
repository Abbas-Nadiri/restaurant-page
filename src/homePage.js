import imageOne from "./img/cookingPot.png";
import imageTwo from "./img/linkCooking.png";
export let homePageLoad = function() {

    let contentDiv = document.getElementById("content");
    let homeContainer = document.createElement("div");
    let homeHeader = document.createElement("p");
    let homeText = document.createElement("p");
    const cookingPot = document.createElement("img");
    const linkCooking = document.createElement("img");
    linkCooking.src = imageTwo;
    cookingPot.src = imageOne;

    homeContainer.id = "homeContainer";
    homeHeader.textContent = "Welcome to the home of rustic Hylian cuisine";
    homeText.textContent = "Chef Link's been lost in the sauce since reawakening. Saving Hyrule? Rescuing Princess Zelda? That can wait, the hero IS COOKING!"

    homeContainer.append(homeHeader, homeText, cookingPot, linkCooking);
    contentDiv.append(homeContainer);
}