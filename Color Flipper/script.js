document.getElementById('btn').addEventListener('click', () => {
    const color1 = Math.floor(Math.random() * 255);
    const color2 = Math.floor(Math.random() * 255);
    const color3 = Math.floor(Math.random() * 255);
    console.log(color1,color2,color3);
    const color=`rgb(${color1},${color2},${color3})`;
    document.body.style.backgroundColor=color;
    document.getElementById('color').innerText=color;
})