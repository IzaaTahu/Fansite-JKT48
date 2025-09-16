function openModal(img) {
      document.getElementById("myModal").style.display = "flex";
      document.getElementById("modalImg").src = img.src;
      document.getElementById("modalCaption").innerText = img.alt;
    }

    function closeModal() {
      document.getElementById("myModal").style.display = "none";
    }