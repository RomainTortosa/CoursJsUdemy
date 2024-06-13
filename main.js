/**
 * Variables
 */



var nomDuJoueur1 = "Torto";
var ageDuJoueur1 = 31;
var estUnHommeJoueur1 = true;

var nomDuJoueur2 = "Tarta";
var ageDuJoueur2 = 22;
var estUnHommeJoueur2 = false;



/**
 * Main
 */

afficherLesJoueur();
comparerAgeDesDeuxJoueurs();
afficherLeGenre(estUnHommeJoueur1);
afficherLeGenre(estUnHommeJoueur2);

/**
 * Fonctions
 */

function afficherLesJoueur(){
    console.log("Nom du joueur 1 : " + nomDuJoueur1);
    console.log("Age du joueur 1 : " + ageDuJoueur1);
    // if(estUnHommeJoueur1){
    //     console.log("le joueur 1 est un homme");
    // } else {
    //     console.log("Le joueur 1 est une femme");
    // }
    
    console.log("%s est le nom du joueur 2", nomDuJoueur2);
    console.log("%d est l'age du joueur 2" , ageDuJoueur2);
    // if(estUnHommeJoueur2){
    //     console.log("le joueur 2 est un homme");
    // } else {
    //     console.log("Le joueur 2 est une femme");
    // }
    
}

function comparerAgeDesDeuxJoueurs(){
    if(ageDuJoueur1 > ageDuJoueur2){
        console.log("Le joueur 1 est le plus agé");
    } else if (ageDuJoueur2 > ageDuJoueur1){
        console.log("Le joueur 2 est le plus agé");
    } else{
        console.log ("Les joueurs ont le même age");
    }
}

function afficherLeGenre(bool){
    if(bool){
        console.log("le joueur est un homme");
    } else {
        console.log("Le joueur est une femme");
    }
    
}