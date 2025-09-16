document.addEventListener("DOMContentLoaded", function () {
    const memberCards = document.querySelectorAll(".member-card");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    const popupPanggung = document.getElementById("popupPanggung");
    const popupImage = document.getElementById("popupImage");
    const popupName = document.getElementById("popupName");
    const popupGen = document.getElementById("popupGen");
    const popupTanggal = document.getElementById("popupTanggal");
    const popupJiko = document.getElementById("popupJiko");
    const popupGolongan = document.getElementById("popupGolongan");
    const popupHoroskop = document.getElementById("popupHoroskop");
    const popupTinggi = document.getElementById("popupTinggi");
    const popupHobi = document.getElementById("popupHobi");
    const popupMakanan = document.getElementById("popupMakanan");
    
    
    memberCards.forEach(card => {
        card.addEventListener("click", () => {
            popupPanggung.textContent = card.dataset.panggung;
            popupImage.src = card.dataset.foto;
            popupName.textContent = card.dataset.name;
            popupGen.textContent = card.dataset.gen;
            popupTanggal.textContent = card.dataset.tanggal;
            popupJiko.textContent = card.dataset.jiko;
            popupGolongan.textContent = card.dataset.golongan;
            popupHoroskop.textContent = card.dataset.horoskop;
            popupTinggi.textContent = card.dataset.tinggi;
            popupHobi.textContent = card.dataset.hobi;
            popupMakanan.textContent = card.dataset.makanan;
            

            popup.style.display = "flex";
        });
    });

    



    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});

