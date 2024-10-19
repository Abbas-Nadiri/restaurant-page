import menuImage from "./img/menu.png"

export const menuPageLoad = function() {
    let contentDiv = document.getElementById("content");
    let menuContainer = document.createElement("div");
    const menu = document.createElement("img");
    menuContainer.id = "menuContainer";
    menu.src = menuImage;

    menuContainer.append(menu);
    contentDiv.append(menuContainer);
}