var bitress = {
    Utils : {},
    Http: {}
}



bitress.Http.get = function () {
    
}


bitress.Utils.fetchAnnouncements = function() {

}

bitress.Utils.toggleNav = function () {
    const hamburger = document.querySelector("#hamburger");
    const navList = document.querySelector(".nav-link");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("navbar-toggled")
    });
}

bitress.Utils.clock = function ()
{

    const currentDate = new Date();

    const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
    ];

    const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
    ];

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    const formattedTime = `${dayOfWeek}, ${month} ${day}, ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;



    const pstTIme = document.querySelector("#pst-time a")
    pstTIme.textContent = formattedTime

}


bitress.Utils.clock();
setInterval(bitress.Utils.clock, 1000)

document.addEventListener("DOMContentLoaded", function () {
    bitress.Utils.toggleNav();
});
