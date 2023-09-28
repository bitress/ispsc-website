var bitress = {
    URI: {
        announcement_api: "https://istaronline.org/api.php"
    },
    Utils: {},
    Http: {}
};

bitress.Utils.fetchAnnouncements = function () {
    fetch(bitress.URI.announcement_api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const announcements = data;

            announcements.sort((a, b) => new Date(b.date) - new Date(a.date));

            const latestAnnouncements = announcements.slice(0, 2);
            var placeholder = document.getElementById("announcements");
            latestAnnouncements.forEach(e => {
                placeholder.innerHTML += `<li>${e.date}: ${e.content}</li>`;
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};

bitress.Utils.toggleNav = function () {
    const hamburger = document.querySelector("#hamburger");
    const navList = document.querySelector(".nav-link");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("navbar-toggled");
    });
};

bitress.Utils.clock = function () {
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

    const pstTime = document.querySelector("#pst-time a");
    pstTime.textContent = formattedTime;
};

const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

bitress.Utils.clock();
setInterval(bitress.Utils.clock, 1000);
bitress.Utils.fetchAnnouncements();

document.addEventListener("DOMContentLoaded", function () {
    bitress.Utils.toggleNav();
});



let currentSlide = 1;
const totalSlides = document.querySelectorAll('input[name="radio-buttons"]').length;

function showSlide(slideNumber) {
  document.querySelector(`#img-${slideNumber}`).checked = true;
}

function nextSlide() {
  currentSlide = (currentSlide % totalSlides) + 1;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);