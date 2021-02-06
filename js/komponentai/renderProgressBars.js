function renderProgresJuosta (selector, data) {

// validation

// logika
const DOM = document.querySelector(selector);
let HTML = '';
for(let i=0; i < data.length; i++) {
    const elem = data[i];

    HTML += `<div class="progress-bar"> 
                <div class="top">
                    <div class="label">${elem.label}</div>
                    <div class="value">${elem.value}%</div>
                </div>
                <div class="bottom">
                    <div class="progress" style="width: ${elem.value}%"></div>
                </div>
            </div>`;
}

// DOM.innerHTML = HTML;
DOM.insertAdjacentHTML('beforeend', HTML);


//  post logic validation

// return


}

export { renderProgresJuosta }

