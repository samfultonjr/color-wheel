
// @red: rgb(255, 0, 0);
// @red-violet: rgb(255, 0, 149);
// @violet: rgb(172, 0, 252);
// @blue-violet: rgb(109, 0, 252);
// @blue: rgb(0, 0, 255);
// @blue-green: rgb(0, 183, 255);
// @green: green;
// @yellow-green: rgb(145, 255, 0);
// @yellow: rgb(255, 255, 0);
// @yellow-orange: rgb(255, 196, 0);
// @orange: rgb(253, 169, 0);
// @red-orange: rgb(255, 72, 0);


async function newRandomColors(){
    await changeColor({name:'red', rMin:200, rMax:255, gMin:0, gMax:25, bMin:0, bMax:25});
    await changeColor({name:'red-violet', rMin:100, rMax:255, gMin:0, gMax:25, bMin:50, bMax:150});
    await changeColor({name:'violet', rMin:100, rMax:255, gMin:0, gMax:25, bMin:50, bMax:250});
    await changeColor({name:'blue-violet', rMin:50, rMax:200, gMin:0, gMax:25, bMin:150, bMax:220});
    await changeColor({name:'blue', rMin:0, rMax:50, gMin:0, gMax:50, bMin:150, bMax:255});
    await changeColor({name:'blue-green', rMin:0, rMax:25, gMin:150, gMax:250, bMin:150, bMax:250});
    await changeColor({name:'green', rMin:0, rMax:25, gMin:200, gMax:250, bMin:0, bMax:50});
    await changeColor({name:'yellow-green', rMin:50, rMax:200, gMin:150, gMax:250, bMin:0, bMax:25});
    await changeColor({name:'yellow', rMin:150, rMax:255, gMin:150, gMax:255, bMin:0, bMax:25});
    await changeColor({name:'yellow-orange', rMin:200, rMax:255, gMin:100, gMax:250, bMin:0, bMax:50});
    await changeColor({name:'orange', rMin:200, rMax:255, gMin:50, gMax:150, bMin:0, bMax:25});
    await changeColor({name:'red-orange', rMin:200, rMax:255, gMin:25, gMax:100, bMin:0, bMax:25});
    
}



function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

async function changeColor({name, rMin, rMax, gMin, gMax, bMin, bMax}){
    document.getElementById(name).style.borderColor  = `rgb(${random(rMin, rMax)}, ${random(gMin, gMax)}, ${random(bMin, bMax)}) transparent transparent transparent`;
}




document.querySelector('.regenerate').addEventListener('click', ()=>{
    newRandomColors();
})




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }