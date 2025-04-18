// ----------------------------------- Fonction de Validation Du Nom -----------------------------------//

function validateIconeNom() {
  const nom = document.getElementById('Nom').value;
  const checkIcon = document.querySelector('.checkNom');
  const errorIcon = document.querySelector('.errorNom');

  if (nom.length < 3) {
    checkIcon.style.display = 'none';
    errorIcon.style.display = 'block';
  } else {
    checkIcon.style.display = 'block';
    errorIcon.style.display = 'none';
  }
}
document.getElementById('Nom').addEventListener('input', validateIconeNom);




// ----------------------------------- Fonction de Validation Email ----------------------------------- //

function validateEmail() {
  const email = document.getElementById('Email').value;
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!pattern.test(email)) {
    alert("L'adresse email n'est pas valide.");
    return false;
  }
  return true;
}

// Fonction de validation des icônes pour l'email 
function validateIconeEmail() {
  const checkIcon = document.querySelector('.checkEmail');
  const errorIcon = document.querySelector('.errorEmail');
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = document.getElementById('Email').value;

  if (!pattern.test(email)) {
    checkIcon.style.display = 'none';
    errorIcon.style.display = 'block';
  } else {
    checkIcon.style.display = 'block';
    errorIcon.style.display = 'none';
  }
}
document.getElementById('Email').addEventListener('input', validateIconeEmail);





// ----------------------------------- Fonction de Validation Mot De Passe ----------------------------------- //

function checkPasswordIdem() {
  let form = document.querySelector("form");
  let motDePasse = document.getElementById("motDP");
  let confirmeMotDePasse = document.getElementById("vMotDP");

  form.addEventListener("submit", function (event) {
    if (motDePasse.value !== confirmeMotDePasse.value) {
      event.preventDefault();
      alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
    }
  });
}
checkPasswordIdem();




// ----------------------------------- Fonction Mot de Passe Visible ----------------------------------- //

function passwordVisibility() {
  let motDePasse = document.getElementById('motDP');
  let oeil = document.getElementById("oeil");

  oeil.addEventListener('click', function () {
    if (motDePasse.type === "password") {
      motDePasse.type = "text";
      this.src = "oeil/eye-open.png";
      this.alt = "Icône oeil ouvert";
    } else {
      motDePasse.type = "password";
      this.src = "oeil/eye-close.png";
      this.alt = "Icône oeil fermé";
    }
  });
}
passwordVisibility();




// ----------------------------------- Fonction de vérification de la sécurité du mot de passe ----------------------------------- //

function checkPasswordStrength() {
  let motDePasse = document.getElementById('motDP').value;
  let strengthMessage = document.getElementById('password-strength');

  let strength = "Faible";
  let color = "red";

  if (motDePasse.length < 6) {
    strength = "Faible";
    color = "red";
  }

  if (motDePasse.length >= 6 || (/[0-9]+/.test(motDePasse) || /[!@#$%^&*(),.?":{}|<>]/.test(motDePasse))) {
    strength = "Moyenne";
    color = "orange";
  }

  if (motDePasse.length >= 9 && (/[0-9]+/.test(motDePasse) && /[!@#$%^&*(),.?":{}|<>]/.test(motDePasse))) {
    strength = "Forte";
    color = "green";
  }

  strengthMessage.textContent = `Niveau de sécurité : ${strength}`;
  strengthMessage.style.color = color;
}
document.getElementById('motDP').addEventListener('input', checkPasswordStrength);




// ----------------------------------- Fonction Formulaire Valide ----------------------------------- //


function checkFormValidity() {
  const nom = document.getElementById('Nom').value;
  const email = document.getElementById('Email').value;
  const motDePasse = document.getElementById('motDP').value;
  const confirmeMotDePasse = document.getElementById('vMotDP').value;
  const submitButton = document.getElementById('submit-button');

  // Vérifie que tous les champs sont remplis et que le mot de passe est valide
  if (nom.length >= 3 && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && motDePasse.length >= 6 && motDePasse === confirmeMotDePasse) {
    submitButton.disabled = false; // Active le bouton
  } else {
    submitButton.disabled = true; // Désactive le bouton
  }
}

// Appel à la fonction pour vérifier la validité des champs à chaque saisie
document.getElementById('Nom').addEventListener('input', checkFormValidity);
document.getElementById('Email').addEventListener('input', checkFormValidity);
document.getElementById('motDP').addEventListener('input', checkFormValidity);
document.getElementById('vMotDP').addEventListener('input', checkFormValidity);



// ----------------------------------- Fonction Sauvegarde des données ----------------------------------- //

function submitSave() {
  document.getElementById('submit-button').addEventListener('click', function () {
    let name = document.getElementById('Nom').value;
    let email = document.getElementById('Email').value;
    let pwd = document.getElementById('motDP').value;

    const data = JSON.parse(localStorage.getItem("data")) || [];

    // Vérifie si un utilisateur avec le même nom OU le même email existe déjà
    const userExists = data.some(user =>
      user.userName.toLowerCase() === name.toLowerCase() ||
      user.mail.toLowerCase() === email.toLowerCase()
    );

    if (userExists) {
      alert("Cet utilisateur ou cet email existe déjà !");
      return;
    }

    data.push({
      userName: name,
      mail: email,
      motDePasse: pwd,
    })
    localStorage.setItem('data', JSON.stringify(data));
  }
  )
  
};
submitSave();
