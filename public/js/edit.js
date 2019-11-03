document.addEventListener("click", function(e) {
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("Veuillez entrer votre nouvelle tâche ...");
    axios
      .post("/update-item", {
        itemUpdated: userInput,
        id: e.target.getAttribute("data-id")
      })
      .then()
      .catch(err => {
        console.log(err);
      });
  }
});
