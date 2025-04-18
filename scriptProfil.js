// ----------------------------------- Fonction de Profil - Choix Du Memory ----------------------------------- //

// ----------------------------------- Fonction de changement d'image ----------------------------------- //

function changerImage() {
    const select = document.getElementById("memorySelect");
    const image = document.getElementById("memoryImage");
    const value = select.value;
  
    // Si aucune option n'est sélectionnée, cacher l'image
    if (value === "") {
      image.style.display = "none";
      image.src = ""; // Réinitialiser l'image
      image.alt = "";
      return;
    }
  
    // Construire le chemin de l'image
    const cheminImage = "ressources1/" + value + ".png";
    
    // Changer la source de l'image et l'afficher
    image.src = cheminImage;
    image.alt = "Image de " + value;
    image.style.display = "block";
  }
  changerImage();