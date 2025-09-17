// Animasi muncul saat scroll
window.addEventListener("scroll", function() {
    let items = document.querySelectorAll(".timeline-item");
    let triggerBottom = window.innerHeight * 0.85;

    items.forEach(item => {
        let itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add("show");
        }
    });
});
