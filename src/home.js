const renderHome = () => {
    const contentDiv = document.querySelector(".content");

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-content");
    contentDiv.appendChild(homeDiv);

    const homeImage = document.createElement("img");
    homeImage.src = "images/inside-store.PNG";
    homeDiv.appendChild(homeImage);

    const homeDescription = document.createElement("p");
    homeDescription.textContent = "We make the best Pastries...";
    homeDiv.appendChild(homeDescription);
}

export { renderHome };