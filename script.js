function flipCard(card) {
  // Evita virar o card explicativo
  if (card.classList.contains("info-card")) return;
  card.classList.toggle("flipped");
}
