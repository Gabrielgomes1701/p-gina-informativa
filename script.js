function flipCard(card) {
  if (card.classList.contains("info-card")) return;
  card.classList.toggle("flipped");
}
