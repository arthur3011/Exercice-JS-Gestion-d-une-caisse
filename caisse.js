// Déclaration des variables
const budget_du_client = 20000 ;
const prix_cahier = 1500;
const quantite_cahier = 4 ;
const prix_stylo = 500 ;
const quantite_stylo =3 ;
const cahier = prix_cahier*quantite_cahier;
const stylo = 	prix_stylo*quantite_stylo;
const total = cahier+stylo;

// Calcul du montant des achats des stylos et cahiers
console.log("===== CAISSE =====");
console.log("Cahiers : ",prix_cahier*quantite_cahier," FCFA");
console.log("Tylos : ",prix_stylo*quantite_stylo," FCFA");
console.log("Total : ",cahier+stylo," FCFA");

// Utilisation de la condition
console.log("Budget : ",budget_du_client," FCFA");
if (total <= budget_du_client) {
    console.log("Budget suffisant")
} else {
    console.log("Budget insuffisant")
}

console.log(" ")

// Utilisation de la boucle for
/*
let i = 1
for (let i = 1;
    i < 6;
    i++) {
console.log("Achat numéro ", i)
    }
*/

// Utilisation de la boucle while
let i = 1;
while (i < 6) {
    console.log("Achat numéro ",i++)
}
