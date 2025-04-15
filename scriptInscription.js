// Récupérer les éléments des mots de passe et du formulaire
const motDePasse = document.getElementById("MotDP");
const confirmeMotDePasse = document.getElementById("VMotDP");
const form = document.querySelector("form");

// Fonction de validation
form.addEventListener("submit", function (event) {
  if (motDePasse.value !== confirmeMotDePasse.value) {
    event.preventDefault(); // Empêche l'envoi du formulaire si les mots de passe ne correspondent pas
    alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
  }
});

function passwordVisibility() {

    //ajouter un evènement au click sur l'image
    document.getElementById("oeil").addEventListener('click', function () {
        //changer la source de l'image, le alt et le type de l'input
        const pwdInput = document.getElementById('MotDP')

        if (pwdInput.type === "password") {
            pwdInput.type = "text";
            this.src="oeil/eye-open.png"
            //this.setAttribute('src', 'images/eye-open.png');
            this.alt = "Icône oeil ouvert"
        } else {
            pwdInput.type = "password";
            this.src = "oeil/eye-close.png"
            this.alt = "Icône oeil fermé"
        }
    })
}
