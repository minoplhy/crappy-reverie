function randomImageBroker(ElemName, imgArray) {
    const imgEl = document.getElementById(ElemName);
    randomImage(imgEl, imgArray)

}

function randomImage(imgELM, srcArray) {
    const randomIndex = Math.floor(Math.random()*srcArray.length);
    imgELM.src = srcArray[randomIndex];
}