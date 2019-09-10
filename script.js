



function newRandomColors(){
    changeColor({name:'@red', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    changeColor({name:'@red-violet', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:100});
    changeColor({name:'@violet', rMin:100, rMax:255, gMin:0, gMax:50, bMin:50, bMax:200});
    changeColor({name:'@blue-violet', rMin:25, rMax:100, gMin:0, gMax:50, bMin:100, bMax:255});
    changeColor({name:'@blue', rMin:0, rMax:50, gMin:0, gMax:50, bMin:100, bMax:255});
    changeColor({name:'@blue-green', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    changeColor({name:'@green', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    changeColor({name:'@yellow-green', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    changeColor({name:'@yellow', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    changeColor({name:'@yellow-orange', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    changeColor({name:'@orange', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    changeColor({name:'@red-orange', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    less.refreshStyles();
}

newRandomColors();

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function changeColor({name, rMin, rMax, gMin, gMax, bMin, bMax}){
    let mods = {};
    mods[name] = `rgb(${random(rMin, rMax)}, ${random(gMin, gMax)}, ${random(bMin, bMax)})`
    less.modifyVars(mods);
}




document.querySelector('.regenerate').addEventListener('click', ()=>{
    newRandomColors();
})