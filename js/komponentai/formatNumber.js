// function skApvalinimas (skaicius) {
//     if (skaicius % 1 === 0) {
//         return skaicius;
//     } else {
//         return skaicius.toFixed(2);
//     }
    
// }

// function skApvalinimas (skaicius, tikslumas) {
//     if (!tikslumas) {
//         tikslumas = 2;
//     }
    
//     const fixed = 10 ** tikslumas;
//     return Math.round(skaicius * fixed) / fixed;
    
// }

function skApvalinimas (skaicius, tikslumas = 2) {
    // validacijos
    if (typeof skaicius !== 'number' ||
        !isFinite(skaicius)) {
        console.error ('ERROR: Pirmasis parametras turi buti tikras skaicius');
        return false;
    }
    if (typeof tikslumas !== 'number' ||
    !isFinite(tikslumas) ||
    tikslumas % 1 !== 0 ||
    tikslumas < 0 ||
    tikslumas > 10) {
    console.error ('ERROR: Antrasis parametras turi buti tikras skaicius');
    return false;
    }

    const fixed = 10 ** tikslumas;
    return Math.round(skaicius * fixed) / fixed;
    
}
export { skApvalinimas } 