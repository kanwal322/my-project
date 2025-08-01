
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImage');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

function openLightbox(index) {
  const img = images[index];
  currentIndex = index;
  lightboxImg.src = img.src;
  caption.textContent = img.getAttribute('data-caption') || '';
  lightbox.classList.add('show');
}

function closeLightbox() {
  lightbox.classList.remove('show');
  setTimeout(() => {
    lightbox.style.display = 'none';
  }, 400);
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox(currentIndex);
}

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    setTimeout(() => openLightbox(index), 10);
  });
});

if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
if (nextBtn) nextBtn.addEventListener('click', showNext);
if (prevBtn) prevBtn.addEventListener('click', showPrev);

document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('show')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  }
});



const contactForm = document.querySelector('form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('visitor-name').value.trim();
    const email = document.getElementById('visitor-email').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !nameRegex.test(name)) {
      alert("❌ Please enter a valid name (letters only, at least 2 characters).");
      return;
    }

    if (!email || !emailRegex.test(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    if (!message) {
      alert("❌ Message cannot be empty.");
      return;
    }

    
    alert(`✅ Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
  });
}
