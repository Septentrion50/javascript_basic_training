question = prompt("Posez votre question :");

function detectAdoAns(quest) {
    if (quest.match(/(.)+\?$/)) {
        return 1;
    };
    if (quest.match(/^([A-Z ]+[.!?]?)$/)) {
        return 2;
    };
    if (quest.match(/[fF]ortnite/)) {
        return 3;
    };
    if (quest.length === 0) {
        return 4;
    };
};

switch (detectAdoAns(question)) {
    case 1:
        console.log("Ouais, ouais...");
        break;
    case 2:
        console.log("Pwa, calme-toi...");
        break;
    case 3:
        console.log("On se fait une partie soum-soum ?");
        break;
    case 4:
        console.log("T'es en PLS ?");
        break;
    default:
        console.log("Balek.");
        break;
}