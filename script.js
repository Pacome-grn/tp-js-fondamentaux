console.log("Laboratoire prêt !")
const nom = "Pacôme"
let age = 15
//nom = "Adrien"
 console.log(nom)
age = 16
 console.log(age)
 const motDePasseAttendu = "secret123";
 let motDePasseUtilisateur = "12345"; // Changez cette valeur pour tester
 if ("Comparaison entre motDePasseUtilisateur et motDePasseAttendu") {
    console.log("Accès autorisé. Bienvenue !");
} else if ("Vérification de la longueur du mot de passe (< 8 caractères)") {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}
const moi = {
    prenom: "Pacôme",
    nom: "Garnier",
    age: 15,
    competences: ["HTML", "CSS"]
};
 console.log(moi)
console.log(moi.prenom); // Affiche "VotrePrénom"
moi.age = 19
moi.ville = "Lyon"
console.log(moi)
