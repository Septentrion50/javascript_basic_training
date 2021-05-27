arnString = prompt("Donnez un brin d'ARN");
let slice3 = arnString.split( /(?=(?:...)*$)/ );

console.log(slice3);

let proteinArray = [];
slice3.forEach(code => {
    switch (code) {
        case "UCU":
        case "UCC":
        case "UCA":
        case "UCG":
        case "AGU": 
        case "AGC":
            proteinArray.push("Sérine");
            break;
        case "CCU":
        case "CCC":
        case "CCA":
        case "CCG":
            proteinArray.push("Proline");
            break;
        case "UUA":
        case "UUG":
            proteinArray.push("Leucine");
            break;
        case "UUU":
        case "UUC":
            proteinArray.push("Phénylalanine");
            break;
        case "CGU":
        case "CGC":
        case "CGA":
        case "CGG":
        case "AGA":
        case "AGG":
            proteinArray.push("Arginine");
            break;
        case "UAU":
        case "UAC":
            proteinArray.push("Tyrosine");
            break;
    };
});

console.log(proteinArray.join("-"));