let slideIndex = 0;
showSlides();

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  const maxVisibleCards = 5;

  // Ensure slideIndex stays within bounds
  if (slideIndex < 0) {
    slideIndex = 0;
  } else if (slideIndex > totalCards - maxVisibleCards) {
    slideIndex = totalCards - maxVisibleCards;
  }

  cards.forEach((card, index) => {
    if (index >= slideIndex && index < slideIndex + maxVisibleCards) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
