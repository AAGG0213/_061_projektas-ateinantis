import { skApvalinimas } from './formatNumber.js';

function renderProgresJuosta (selector, data) {

// validation
if (typeof selector !== 'string' ||
    selector === '') {
    console.error('ERROR: selector parametras netinkamo formato');
    return false;
}
if (!Array.isArray(data) ||
    data.length === 0) {
    console.error('ERROR: data parametras netinkamo formato');
    return false;
}


// logika
const DOM = document.querySelector(selector);
if (!DOM) {
    console.error('ERROR: pagal pateikta selektoriu elemento nera');
    return false;
}
let HTML = '';
for(let i=0; i < data.length; i++) {
    const elem = data[i];
    const formatuotasSk = skApvalinimas(elem.value, 3);

    // objekto validacija
    if (typeof elem !== 'object' ||
        Array.isArray(elem) ||
        !elem.label ||
        typeof elem.label !== 'string' ||
        !elem.value ||
        !isFinite(elem.value) ||
        typeof elem.value !== 'number' ||
        elem.value < 0 ||
        elem.value > 100 ||
        formatuotasSk === false
        ) {
        continue;
    }
 // <div class="value">${elem.value}%</div>

    HTML += `<div class="progress-bar"> 
                <div class="top">
                    <div class="label">${elem.label}</div>
                   
                    <div class="value">${formatuotasSk}%</div>

                    </div>
                <div class="bottom">
                    <div class="progress" style="width: ${elem.value}%">
                        <div class="loading"></div>
                    </div>
                </div>
            </div>`;
}




//  post logic validation
if (!HTML === '') {
    console.error('ERROR: duomenyse nera teisingu objektu, todel nesugeneruotas HTML');
    return false;

}

// return
// DOM.innerHTML = HTML;

DOM.insertAdjacentHTML('beforeend', HTML);


}

export { renderProgresJuosta }

