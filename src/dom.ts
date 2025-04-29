export function createButton() {
  const button = document.createElement("button");
  button.id = "dynamicButton";
  button.textContent = "Clique ici";
  button.disabled = false;

  button.addEventListener("click", () => {
    button.disabled = true; // désactive le bouton après le clic
    console.log("Bouton cliqué et désactivé");
  });

  document.body.appendChild(button);
}

export function createSendButton() {
  const button = document.createElement("button");
  button.id = "sendButton";
  button.textContent = "Envoyer";

  button.addEventListener("click", () => {
    button.textContent = "Envoyé ✅";
  });

  document.body.appendChild(button);
}
export function createAddItemButton() {
  const button = document.createElement("button");
  button.id = "addItemButton";
  button.textContent = "Ajouter un élément";

  button.addEventListener("click", () => {
    const newItem = document.createElement("div");
    newItem.className = "item";
    newItem.textContent = "Nouvel élément ajouté";
    document.body.appendChild(newItem);
  });

  document.body.appendChild(button);
}
