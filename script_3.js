let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function marioPyramid(num) {
    let f 
    for(i = 1; i <= num; i++)
    {
        f = `${" ".repeat(num - i)}` + `${"#".repeat(i)}`; 
        console.log(f);
    }
}

marioPyramid(floors);