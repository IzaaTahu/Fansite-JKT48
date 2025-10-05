const container = document.querySelector('.decoration-container');

// List ikon untuk hiasan (Confetti, Hati, Nada Musik)
const icons = ['❤️', '🎶', '✨', '🎤', '💖', '🎵'];

function createDecoration() {
  const element = document.createElement('div');
  element.classList.add('decoration');

  // Random pilih ikon
  element.textContent = icons[Math.floor(Math.random() * icons.length)];

  // Random posisi di layar
  element.style.left = Math.random() * 100 + 'vw';

  // Random ukuran (biar variasi)
  const size = Math.random() * 12 + 12; // 12px - 24px
  element.style.fontSize = size + 'px';

  // Random durasi jatuh
  const duration = Math.random() * 3 + 4; // 4s - 7s
  element.style.animationDuration = duration + 's';

  container.appendChild(element);

  // Hapus setelah animasi selesai
  setTimeout(() => {
    element.remove();
  }, duration * 1000);
}

// Buat elemen baru tiap 300ms
setInterval(createDecoration, 300);

