function renderSocials(selector, data) {
    
    // validavimas
if (typeof selector !== 'string') {
    return console.error('ERROR: selektorius turi buti string tipo ');
}
if (selector === '') {
    return console.error('ERROR: selektorius negali buti tuscias tekstas');
}

if (!Array.isArray(data)) {
    return console.error('ERROR: duomenys turi buti array tipo');
}

const ilgis = data.length;

if (ilgis === 0) {
    return console.error('ERROR: duomenu sarase turi buti bent vienas objeltas');
}

// logika
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return console.error('ERROR: pagal pateikta selektoriu nepavyko rasti elemento.')

    }
    let HTML = '';

    for (let i = 0; i < ilgis; i++) {
        const elem = data[i];

        if (!arElemValid(elem)) {
            console.warn('WARNING: pateiktas netinkamo formato irasas', elem);

            continue;
        }
    
        HTML += `<a href="${elem.href}" target="_blank" class="fa fa-${elem.icon}" >${elem.icon}</a>`;
    
        console.log(elem);
    }
//post logic validavimas

    if (HTML === '') {
        return console.error('ERROR: duomenu sarase nera nei vieno normalaus objekto');
    }

 //rezultatas  
    DOM.innerHTML = HTML;
    // return HTML;
    return;

}

function arElemValid(elem) {
    if (typeof elem !== 'object' ||
    Array.isArray(elem) || 
    !elem.href || 
    typeof elem.href !== 'string' ||
    !elem.icon ||
    typeof elem.icon !== 'string') {
        return false;
    } else {
        return true;
    }
    
}


export { renderSocials }