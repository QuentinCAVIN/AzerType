function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}


function lancerJeu() {


    let listeProposition = listeMots

    let radioMots = document.getElementById("mots")
    let radioPhrases = document.getElementById("phrases")
    console.log(radioMots)
    console.log(radioPhrases)


    let inputEcriture = document.getElementById("inputEcriture")
    let boutonValider = document.getElementById("btnValiderMot")

    let score = 0
    let nbMotsProposes = listeProposition.length

    let i = 0

    afficherProposition(listeProposition[i])

    radioMots.addEventListener("change", () => {
        listeProposition = listeMots
        afficherProposition(listeProposition[i])
    })

    radioPhrases.addEventListener("change", () => {
        listeProposition = listePhrases
        afficherProposition(listeProposition[i])
    })


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


    afficherResultat(score, nbMotsProposes)

    initAddEventListenerPopup()
    let form = document.querySelector(".popup form")
    console.log(form)
    form.addEventListener("submit", (Event) => {
        Event.preventDefault()
        let nom = document.getElementById("nom").value
        let email = document.getElementById("email").value
        afficherEmail(nom, email, score)
    })
}

function afficherResultat(resultat, nombreMotATrouver) {

    let spanScore = document.querySelector(".zoneScore span")

    let scoreFinal = `${resultat}/${nombreMotATrouver}`
    spanScore.innerText = scoreFinal
}

function afficherProposition(mot) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = mot
}