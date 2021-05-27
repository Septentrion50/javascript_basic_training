// Un prompt s'affiche avec la question suivante
let num = prompt("De quel nombre veux-tu calculer la factorielle ?");
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
function Factorial(n) {
    var ans=1;
      
    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

console.log(`Le résultat est : ${Factorial(num)}`);