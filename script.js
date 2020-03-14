const randomPalette = () => {
    const r = Math.floor((Math.random() * 255) + 1);
    const g = Math.floor((Math.random() * 255) + 1);
    const b = Math.floor((Math.random() * 255) + 1);

    const hsl = rgbToHsl(r, g, b);
    const randomInit = Math.floor(Math.random()*(359-0+1)+0);
    let colorsArray = [randomInit];
    let finalArray = [];
    for(let i = 0; i < 5 ; i ++) {
        let num = 0;
        if(i > 0) {
            num = (colorsArray[i-1] + 72) > 359 ? 0 : (colorsArray[i-1] + 72);
            if(num === 0) {
                num = obtenerColorEnRango(colorsArray[i-1]);
            }
            colorsArray.push(num);
        }
        console.log(num);
        const rgb = hslToRgb(((num*100)/360)/100, hsl[1], hsl[2]);
        finalArray[i] = [Math.floor(rgb[0]), Math.floor(rgb[1]), Math.floor(rgb[2])];
    }
    pintarElementos(finalArray);
    generateRules(finalArray, false);  
}

const obtenerColorEnRango = (numActual) => {
    const diff = 359 - numActual;
    const diff2 = numActual - diff;
    return 0 + diff2;
}

const pintarElementos = (rgbColor) => {
    document.querySelector('#color1').style.backgroundColor = 
    `rgb(${rgbColor[0][0]},${rgbColor[0][1]},${rgbColor[0][2]})`;

    document.querySelector('#color2').style.backgroundColor = 
    `rgb(${rgbColor[1][0]},${rgbColor[1][1]},${rgbColor[1][2]})`;

    document.querySelector('#color3').style.backgroundColor = 
    `rgb(${rgbColor[2][0]},${rgbColor[2][1]},${rgbColor[2][2]})`;

    document.querySelector('#color4').style.backgroundColor = 
    `rgb(${rgbColor[3][0]},${rgbColor[3][1]},${rgbColor[3][2]})`;

    document.querySelector('#color5').style.backgroundColor = 
    `rgb(${rgbColor[4][0]},${rgbColor[4][1]},${rgbColor[4][2]})`;
}

const generateRules= (rgbColor, reset) => {
    console.log(reset);
    const text = !reset ? `
        .website-background{ color: rgb(${rgbColor[0][0]},${rgbColor[0][1]},${rgbColor[0][2]});}

        .element-text{ color: rgb(${rgbColor[1][0]},${rgbColor[1][1]},${rgbColor[1][2]});}
        
        .element-border{ border-color: rgb(${rgbColor[2][0]},${rgbColor[2][1]},${rgbColor[2][2]})}
        
        .element-background{ background-color: rgb(${rgbColor[3][0]},${rgbColor[3][1]},${rgbColor[3][2]});}
        
        .header{ color: rgb(${rgbColor[4][0]},${rgbColor[4][1]},${rgbColor[4][2]});}
    ` : '';

    document.querySelector('#css-rules').textContent = text;
}

const limpiarPaleta = () => {
    const coloresIniciales = [
        [255,255,255],
        [255,255,255],
        [255,255,255],
        [255,255,255],
        [255,255,255],
    ];

    pintarElementos(coloresIniciales);
    generateRules(coloresIniciales, true); 
}

document.querySelector('#nuevaPaleta').addEventListener("click", () => {
    randomPalette();
});

document.querySelector('#limpiarPaleta').addEventListener("click", () => {
    limpiarPaleta();
});