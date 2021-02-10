function form(selector) {
    const formDOM = document.querySelector(selector);
    const allInputsDOM = formDOM.querySelectorAll('input');
    const allTextareaDOM = formDOM.querySelectorAll('textarea');
    // galima trumpiau: const allInputsDOM = formDOM.querySelectorAll('input, textarea')
    const allTextsDOM = [...allInputsDOM, ...allTextareaDOM];
    const submitDOM = formDOM.querySelector('.btn[type="submit"]');

    // event listeners
    submitDOM.addEventListener('click', event => {
        event.preventDefault();

        // for (const input of allInputsDOM) {
            // console.log(input.value);
        // }
        // for (const textarea of allTextareaDOM) {
            // console.log(textarea.value);
        // }
        // for (const input of allTextsDOM) {
            // console.log(input.value);
        // }
        for (const input of allTextsDOM) {
            const text = input.value;
            const rule = input.dataset.validationRule;

            switch (input.dataset.validationRule) {
                case 'name':
                    console.log('Validacija pagal vardo taisykles', text)
                    break;
                case 'email':
                    console.log('Validacija pagal email taisykles', text)
                    break;
                case 'text':
                    console.log('Validacija pagal text taisykles', text)
                    break;
            
                default:
                    console.log('Rasta neatpazinta validavimo taisykle', rule)

                    break;
            }
        }

    });


    console.log(formDOM);

}

    export { form };
