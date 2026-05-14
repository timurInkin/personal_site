const navButtons = document.querySelectorAll(".nav-btn");
const tabs = document.querySelectorAll(".tab");
const letterContainer = document.querySelector(".letter_container");
const contactInner = document.querySelector(".contact_inner");
const letterButton = document.getElementById("letter_btn");
const closeButton = document.getElementById("close_btn");

function activateTab(button) {
    const tabId = button.dataset.tab;
    const tab = document.querySelector(tabId);

    if (!tab || button.classList.contains("active")) {
        return;
    }

    navButtons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
    });

    tabs.forEach((item) => {
        item.classList.remove("active");
        item.hidden = true;
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    tab.classList.add("active");
    tab.hidden = false;
}

navButtons.forEach((button) => {
    button.setAttribute("aria-selected", "false");
    button.addEventListener("click", () => activateTab(button));
});

tabs.forEach((tab) => {
    tab.hidden = true;
});

if (navButtons.length > 0) {
    activateTab(navButtons[0]);
}

if (letterButton && closeButton && letterContainer && contactInner) {
    letterButton.addEventListener("click", () => {
        letterContainer.style.display = "block";
        contactInner.style.display = "none";
    });

    closeButton.addEventListener("click", () => {
        letterContainer.style.display = "none";
        contactInner.style.display = "";
    });
}
