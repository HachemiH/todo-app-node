document.addEventListener("click", function(e) {
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("Veuillez entrer votre nouvelle tâche ...");
    console.log(userInput);
  }
});
