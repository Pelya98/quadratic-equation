module.exports = function solveEquation(equation){
    let x1 = 0;
    let x2 = 0;
    let result =[];
    let Urav = equation.split(' ');
    let D=0;
    if (Urav[7] == '-')
        D = ((Urav[4] * Urav[4]) + (4 * Urav[0] * Urav[8]))
    else
        D = ((Urav[4] * Urav[4]) - (4 * Urav[0] * Urav[8]));
    let squear = Math.sqrt(D);
    if (Urav[3] == '-')
        x1 = (+(Urav[4]) + squear) / (2 * Urav[0]);
    else
        x1 = (+(-Urav[4]) + squear) / (2 * Urav[0]);

    if (Urav[3] == '-')
        x2 = (+(Urav[4]) - squear) / (2 * Urav[0]);
    else
        x2 = (+(-Urav[4]) - squear) / (2 * Urav[0]);

    result.push(x1,x2);
    return result;
}

