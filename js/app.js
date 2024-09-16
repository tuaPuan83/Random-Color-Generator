const colorBox = document.querySelector('#color__square');
const colorText = document.querySelector('#color__name');
const generatorBtn = document.querySelector('#ran__btn');
const bgColorBtn = document.querySelector('#ran__bg__color');



const generatorPalette = () => {
    for (let i = 0; i < 8; i++) {
        let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
        let ranNum = randomColor.padStart(6,0);

        colorBox.style.background = `#${ranNum}`;
        colorText.innerHTML = `#${ranNum}`;
    }
    
}

generatorBtn.addEventListener('click', generatorPalette);

const ranBgColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const rgb = "rgb(" + r + ", " + g + ", " + b +")";

    console.log(rgb)

    document.body.style.backgroundColor = rgb

}

bgColorBtn.addEventListener('click', ranBgColor)



