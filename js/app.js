const colorBox = document.querySelector('#color__square');
const colorText = document.querySelector('#color__name');
const generatorBtn = document.querySelector('#ran__btn');

const generatorPalette = () => {
    for (let i = 0; i < 8; i++) {
        let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
        let ranNum = randomColor.padStart(6,0);

        colorBox.style.background = `#${ranNum}`;
        colorText.innerHTML = `#${ranNum}`;
    }
    
}

generatorBtn.addEventListener('click', generatorPalette);



