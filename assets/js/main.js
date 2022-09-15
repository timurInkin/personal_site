
const navBtn = document.querySelectorAll(".nav-btn");
const tabsItem = document.querySelectorAll(".tab");


navBtn.forEach(onNavBtnClick)

// function onLetterClick()

function onNavBtnClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        console.log(currentBtn);
        let tabId = currentBtn.getAttribute("data-tab");
        console.log(tabId);
        let currentTab = document.querySelector(tabId);


        if (!currentBtn.classList.contains('active')) {

        
            console.log(currentTab);

            navBtn.forEach(function(item) {
                item.classList.remove('active');
            });
            tabsItem.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
         }

    });
}


document.querySelector(".nav-btn").click();

var letterContainer = document.querySelector(".letter_container");
var contactInner = document.querySelector(".contact_inner");

var letterBtn = document.getElementById("letter_btn");
var closeBtn = document.getElementById("close_btn");

letterBtn.onclick = function() {
    console.log('letter on click');
    letterContainer.style.display = 'block';

    contactInner.style.display = 'none';

};
closeBtn.onclick = function() {
    letterContainer.style.display = 'none';
    contactInner.style.display = 'flex';
};
