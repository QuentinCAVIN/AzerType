console.log(" lancement du programme")

//Liste des mots utilisé par le jeu
let listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]
let listeMots = ["Cachalot", "Pétunia", "Serviette"]



/**
 * Tests de méthodes
 */

let inputEcriture = document.getElementById("inputEcriture")
//console.log(inputEcriture)

let btnValiderMot = document.getElementById("btnValiderMot")
//console.log(btnValiderMot)

let zoneProposition = document.querySelector(".zoneProposition")
//console.log(zoneProposition)

let zoneScore = document.querySelector(".zoneScore span")
//console.log(zoneScore)

let listeInputRadio = document.querySelectorAll(".optionSource input")

/*let image = document.getElementById("image test")
image.classList.remove("proposition")
image.classList.add("choixDuModeDeJeu")*/

/*let contenuTitre = "Quill"
let contenuParagraphe = "Un mec qui frappe vite et fort"

let div = `
    <div>
        <h1>${contenuTitre}</h1>
        <p>${contenuParagraphe}</p>
    </div>
    `

let body = document.querySelector("body")
body.innerHTML = div */

for (let i = 0; i < listeInputRadio.length; i++) {
    //console.log(listeInputRadio[i]);
}

let monBouton = document.getElementById("btnValiderMot")
monBouton.addEventListener("click", () => {
    //console.log("Vous avez cliqué sur le bouton")
})

document.addEventListener("keydown", (Event) => {
    // console.log(Event)
})