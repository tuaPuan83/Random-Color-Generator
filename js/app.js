// const colorBox = document.querySelector('#color__square');

const generatorBtn = document.querySelector('#ran__btn');
const bgColorBtn = document.querySelector('#ran__bg__color');



const generatorPalette = () => {
    for (let i = 0; i < 8; i++) {
        let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
        let ranNum = randomColor.padStart(6,0);

        // colorBox.style.background = `#${ranNum}`;
        // colorText.innerHTML = `#${ranNum}`;
    }
    
}

generatorBtn.addEventListener('click', generatorPalette);

// const ranBgColor = () => {
//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 256)
//     const b = Math.floor(Math.random() * 256)

//     const rgb = "rgb(" + r + ", " + g + ", " + b +")";

//     console.log(rgb)

//     document.body.style.backgroundColor = rgb

// }

// bgColorBtn.addEventListener('click', ranBgColor)

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256) 
    return `rgb(${r},${g},${b})`;
}

const boxes = document.querySelectorAll('#color__square')
const colorTexts = document.querySelectorAll('#color__name');

for (let box of boxes) {
    generatorBtn.addEventListener('click', function () {
        box.style.background = makeRandColor();
    })
}

for (let colorText of colorTexts) {
    generatorBtn.addEventListener('click', function () {
        // box.style.background = makeRandColor();
        colorText.innerHTML = makeRandColor();
    })
}



console.log(boxes)



