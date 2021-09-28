import '../scss/style.scss';

const input = document.querySelector('#colorPicker');
const applyBtn = document.querySelector('#applyBtn');
const randomBtn = document.querySelector('#randomBtn');

function getRandomRGBColor() {
    const colors = [];
    let color = 0;

    for (let i = 0; i < 3; i++) {
        color = Math.round(Math.random() * 255);
        colors.push(color);
    }

    return colors;
}

function setRGBColor(color, random = false) {
    if (random) {
        input.value = color;
    }
    document.body.style.backgroundColor = `rgb(${color})`;
}

randomBtn.addEventListener('click', () => {
    setRGBColor(getRandomRGBColor().join(', '), true)
});

applyBtn.addEventListener('click', () => {
    setRGBColor(input.value);
});