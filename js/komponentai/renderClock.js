function laikrodukas (selector, deadline) {
// validacijos
if (typeof selector !== 'string' ||
    selector === '') {
        console.error('ERROR: netinkamo formato selektorius');
        return false;
    }
    if (typeof deadline !== 'string' ||
    deadline === '' ||
    !isFinite((new Date('2000-' + deadline).getTime()))) {
        console.error('ERROR: netinkamo formato deadline parametras');
        return false;
    }
// logika
const DOM = document.querySelector(selector);
if (!DOM) {
    console.error('ERROR: pagal pateikta selektoriu elemento nera');
    return false;
}
let dataLaikas = updateclock(deadline);
const zymes = ['days', 'hours', 'minutes', 'seconds'];
let HTML = '';

for (let i=0; i<4; i++) {
    const key = zymes[i];
    HTML += `<div class="time"> 
            <div class="reiksme">${formatuotiSkaiciu(dataLaikas[key])} </div>
            <div class="zyme">${key}</div>
    </div>`;

}

// rezultatas
DOM.innerHTML = HTML;

// neefektyvi paieska, nes ieskoma visame dokumente (HTML'e)
// const allDOMvalues = document.querySelectorAll(`${selector} > .time > .reiksme`);
// zymiai efektyvesnis budas ieskoti nuo artimiausios zinomos tinkamos vietos

const allDOMvalues = DOM.querySelectorAll('.reiksme');

console.log(allDOMvalues);

setInterval(function () {
    dataLaikas = updateclock(deadline);
    for (let i=0; i<4; i++) {
         allDOMvalues[i].innerText = formatuotiSkaiciu(dataLaikas[zymes[i]]);
        const key = zymes[i];
        // HTML += `<div class="time"> 
        //         <div class="reiksme">${dataLaikas[key]} </div>
        //         <div class="zyme">${key}</div>
        // </div>`;
    
    }
}, 1000);
}

function updateclock(deadline) {
    const data = new Date();

    let deadlineYear = data.getFullYear();
    let fullDeadline = `${deadlineYear}-${deadline}`;
    let deadlineInMs = (new Date(fullDeadline)).getTime();
    const now = Date.now();

        if (deadlineInMs < now) {
            deadlineYear++;
            fullDeadline = `${deadlineYear}-${deadline}`;
            deadlineInMs = (new Date(fullDeadline)).getTime();
        }
    const diff = deadlineInMs - now;

    let unusedSeconds = Math.round(diff / 1000);

        const days = Math.floor(unusedSeconds / 60 / 60 / 24);
        unusedSeconds -= days * 60 * 60 * 24;

        const hours = Math.floor(unusedSeconds / 60 / 60);
        unusedSeconds -= hours * 60 * 60;

        const minutes = Math.floor(unusedSeconds / 60 );
        unusedSeconds -= minutes * 60;

        const seconds = unusedSeconds;

        // console.log(diff);
        
        // return {
        //     days: days,
        //     hours: hours,
        //     minutes: minutes,
        //     seconds: seconds
            
        // }
        // kai raktazodis ir kintamasis sutampa, galima rasyti paprasciau:
        return { days, hours, minutes, seconds };
}
// 
// Date.prototype.getDay()

function formatuotiSkaiciu(skaicius) {
    return skaicius < 10 ? '0' + skaicius : skaicius;
}

export { laikrodukas }