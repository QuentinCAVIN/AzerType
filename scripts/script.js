
/**
 * utilisé à la fin du jeu pour partager son score par mail
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

/**
 * affiche le résultat dans la zone de score
 */
function afficherResultat(resultat, nombreMotATrouver) {

    let spanScore = document.querySelector(".zoneScore span")

    let scoreFinal = `${resultat}/${nombreMotATrouver}`
    spanScore.innerText = scoreFinal
}

/**
 * affiche le mot en parametre dans la zone de proposition
 */
function afficherProposition(mot) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = mot
}

/**
 * Lance le jeu
 */
function lancerJeu() {


    let listeProposition = listeMots
    let score = 0
    let nbMotsProposes = listeProposition.length

    afficherResultat(score, nbMotsProposes)

    //
    let radioMots = document.getElementById("mots")
    let radioPhrases = document.getElementById("phrases")
    radioMots.addEventListener("change", () => {
        listeProposition = listeMots
        afficherProposition(listeProposition[i])
    })

    radioPhrases.addEventListener("change", () => {
        listeProposition = listePhrases
        afficherProposition(listeProposition[i])
    })



    // le compteur va servir à afficher l'élément suivant de la liste de proposition
    let i = 0
    afficherProposition(listeProposition[i])


    let inputEcriture = document.getElementById("inputEcriture")
    let boutonValider = document.getElementById("btnValiderMot")

    // cliquer sur le bouton valider vérifie si le mot est correct et attribue le point en fonction.
    // quand l'élément suivant de la liste de proposition est "undefined" c'est la fin du jeu
    boutonValider.addEventListener("click", () => {

        if (inputEcriture.value === listeProposition[i]) {
            score++
        }

        i++
        if (listeProposition[i] !== undefined) {
            afficherProposition(listeProposition[i])
            console.log(inputEcriture.value + `Mot n°${i}`)

        } else {
            afficherProposition("Fin du jeu")
            boutonValider.setAttribute("disabled", true)
            radioMots.setAttribute("disabled", true)
            radioPhrases.setAttribute("disabled", true)
        }
        afficherResultat(score, nbMotsProposes)
        inputEcriture.value = ""
    })

    // va activer la fenétre de partage
    initAddEventListenerPopup()
    let form = document.querySelector(".popup form")

    // Quand on valide le formulaire de partage, on active la fonction afficherEmail
    form.addEventListener("submit", (Event) => {
        Event.preventDefault()
        let nom = document.getElementById("nom").value
        let email = document.getElementById("email").value
        afficherEmail(nom, email, score)
    })
}