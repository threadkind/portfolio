if(window.innerWidth > window.innerHeight){
    document.getElementById('social').style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    document.querySelector('#about p').style.fontSize = "2.70vh";
}

console.log(window.innerHeight);
console.log(document.querySelector('#about').size);