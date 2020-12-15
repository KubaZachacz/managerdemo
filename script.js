const hairStyles = ["hair_1", "hair_2"];

document.addEventListener("DOMContentLoaded", function (event) {

    /* Handle hair styles */
    const radios = document.querySelectorAll('input[type=radio][name="hair_style"]');
    radios.forEach(radio => radio.addEventListener('change', () => {

        for (let style of hairStyles) {
            const hairElements = document.querySelectorAll(`#${style}, path[data-name="${style}"]`);
            hairElements.forEach((el) => {
                el.style.display = 'none';
            })
        }

        const hairStyle = radio.value;

        if (hairStyle) {
            const hairElements = document.querySelectorAll(`#${hairStyle}, path[data-name="${hairStyle}"]`);
            hairElements.forEach((el) => {
                el.style.display = 'block';
            })
        }

    }));

    /* Handle hair colour */
    const colorPickers = document.querySelectorAll('input[type=color]');
    colorPickers.forEach(picker => {
        picker.addEventListener('input', (event) => {
            const { value, name } = event.target;

            const elements = document.querySelectorAll(`.${name}`);
            elements.forEach((el) => {
                el.style.fill = value;
            })
        })
    })


    /* Handle skin colour */
    const skinRadios = document.querySelectorAll('input[type=radio][name="skin"]');
    skinRadios.forEach(radio => radio.addEventListener('change', () => {
        const colour = radio.value;
        console.log('colour', colour)
        if (colour) {
            const skinElements = document.querySelectorAll('.skin');
            skinElements.forEach((el) => {
                el.style.fill = colour;
            })
        }
    }));


    /* Handle fans */
    const fansRadios = document.querySelectorAll('input[type=radio][name="fans"]');
    fansRadios.forEach(radio => radio.addEventListener('change', () => {
        const value = radio.value;


        const fansElements = document.querySelectorAll('#fans circle');
        fansElements.forEach((el, index) => {
            if (value === 'low') {
                if (index % 2) el.style.display = 'none';
            } else {
                el.style.display = 'block';
            }
        })

    }));
});