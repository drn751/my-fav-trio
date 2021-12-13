function changeColor(){
    let rootEl = document.querySelector(":root");
    let randR =  Math.floor((Math.random() * 255) + 1); 
    let randG =  Math.floor((Math.random() * 255) + 1); 
    let randB =  Math.floor((Math.random() * 255) + 1); 
    rootEl.style.setProperty("--r",randR);
    rootEl.style.setProperty("--g",randG);
    rootEl.style.setProperty("--b",randB)
    let colorText = document.querySelector(".blue-text");
    colorText.innerText = `rgb(${randR},${randG},${randB})`;
    navigator.clipboard.writeText(colorText.innerText);
}



// function bubbleGen(){
//     let rootEl = document.querySelector(":root");
//     let bub = document.createElement("div");
//     bub.className = "bubble";
//     bub.style.cssText = `
//     background-color: rgba(255, 255, 255);
//     border-radius: 50%;
//     width: 1rem;
//     height: 1rem;
//     position: absolute;
//     top: 0px;
//     left: var(--xx);
//     `;
//     rootEl.append(bub);
    
//     randNum1 = Math.floor((Math.random() * 2000) + 1);
//     rootEl.style.setProperty("--xx",randNum1+"px");
// }
