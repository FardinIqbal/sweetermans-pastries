const renderMenu = () => {
    const contentDiv = document.querySelector(".content");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-content", "invisible");
    contentDiv.appendChild(menuDiv);

    const header = document.createElement("h1");
    header.textContent ="Menu";
    menuDiv.appendChild(header);

    const chocolateMoose = document.createElement("h2");
    chocolateMoose.textContent ="Chocolate Moose";
    menuDiv.appendChild(chocolateMoose);

    const chocolateMooseDescription = document.createElement("p");
    chocolateMooseDescription.textContent = "Chocolate Moose Cake: $4";
    menuDiv.appendChild(chocolateMooseDescription);

    const tiramisu = document.createElement("h2");
    tiramisu.textContent ="Tiramisu";
    menuDiv.appendChild(tiramisu);

    const tiramisuDescription = document.createElement("p");
    tiramisuDescription.textContent = "Tiramisu: $5";
    menuDiv.appendChild(tiramisuDescription);

    const brownie = document.createElement("h2");
    brownie.textContent ="Brownie";
    menuDiv.appendChild(brownie);

    const brownieDescription = document.createElement("p");
    brownieDescription.textContent = "Brownie: $2"
    menuDiv.appendChild(brownieDescription);
}

export { renderMenu };