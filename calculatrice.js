alert("Bienvenu sur notre calculatrice");
var operation = prompt("Sélectionner l'operation           1) pour l'addition            2) pour la soustraction             3) pour la multiplication            4) pour la division.");
var nombre1 = prompt("entrez le premier nombre");
var nombre2 = prompt("entrez un deuxieme nombre");
switch (operation) {
    case 1:
        alert(nombre1 +" + "+nombre2+" = "+nombre1+nombre2);
        break;
    case 3:
        alert(nombre1 +" X "+nombre2+" = "+nombre1*nombre2);
            break;
    case 2:
        alert(nombre1 +" - "+nombre2+" = "+nombre1-nombre2);
                break;
    case 4:
        alert(nombre1 +" / "+nombre2+" = "+nombre1/nombre2);
             break;
   
}
if (operation < 1 || operation > 5) {
    operation = prompt("Erreur le nombre que vous avez entrez est invalide  veuillez entrer un nombre entre 1 et 4 . Selectionner            1. Addition          2. Soustraction        3. Multiplication          4. Division");
}
if (operation === 1) {
    alert(nombre1 +" + "+nombre2+" = "+nombre1+nombre2);
} else if (operation === 2 ) {
    alert(nombre1 +" - "+nombre2+" = "+nombre1-nombre2);
}else if (operation === 3) {
    alert(nombre1 +" X "+nombre2+" = "+nombre1*nombre2);
}else if (operation === 4) {
    alert(nombre1 +" / "+nombre2+" = "+nombre1/nombre2);
}