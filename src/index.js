import "./styles.css";
import { clearPage } from "./clearPage";
import { homePageLoad } from "./homePage";
import { menuPageLoad } from "./menuPage";
import { contactPageLoad } from "./contactPage";

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");

homePageLoad();

homeButton.addEventListener("click", () => {
    clearPage();
    homePageLoad();
});
menuButton.addEventListener("click", () => {
    clearPage();
    menuPageLoad();
});
contactButton.addEventListener("click", () => {
    clearPage();
    contactPageLoad();

})


