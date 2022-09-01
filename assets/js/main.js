
const navBtn = document.querySelectorAll(".nav-btn");
const tabsItem = document.querySelectorAll(".tab");

navBtn.forEach(onNavBtnClick,)

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


