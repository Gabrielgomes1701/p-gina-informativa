function openCurtain() {
  document.querySelector('.curtain.left').classList.add('open');
  document.querySelector('.curtain.right').classList.add('open');

  // Espera a animação terminar antes de ir para a próxima página
  setTimeout(() => {
    window.location.href = "flashcards.html";
  }, 2000);
}

function flipCard(card) {
  if (card.classList.contains("info-card")) return;
  card.classList.toggle("flipped");
}
