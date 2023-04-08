document.getElementById("user").addEventListener("submit", function(e) {
    e.preventDefault();
    let erreur;
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    let message = document.getElementById("message");

if (!name.value) {
    erreur = "Veuillez saisir un nom";
}
if (!number.value) {
    erreur = "Veuillez saisir un email";
}
if (!message.value) {
    erreur = "Veuillez saisir un numéro de téléphone";
}
if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
} else{
    alert("Message envoyé !! Nous vous ferons un retour bientot.");
}

});
