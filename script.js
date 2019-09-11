



async function newRandomColors(){
    await changeColor({name:'red', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    await changeColor({name:'red-violet', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:100});
    await changeColor({name:'violet', rMin:100, rMax:255, gMin:0, gMax:50, bMin:50, bMax:200});
    await changeColor({name:'blue-violet', rMin:25, rMax:100, gMin:0, gMax:50, bMin:100, bMax:255});
    await changeColor({name:'blue', rMin:0, rMax:50, gMin:0, gMax:50, bMin:100, bMax:255});
    await changeColor({name:'blue-green', rMin:0, rMax:0, gMin:50, gMax:250, bMin:50, bMax:250});
    await changeColor({name:'green', rMin:100, rMax:255, gMin:0, gMax:250, bMin:0, bMax:50});
    await changeColor({name:'yellow-green', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    await changeColor({name:'yellow', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    await changeColor({name:'yellow-orange', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    await changeColor({name:'orange', rMin:100, rMax:255, gMin:0, gMax:50, bMin:0, bMax:50});
    await changeColor({name:'red-orange', rMin:100, rMax:255, gMin:0, gMax:20, bMin:0, bMax:20});
    
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