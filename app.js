const mario  = document.querySelector('.mario');
const obstaculo  = document.querySelector('.obstaculo');

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump'); 
    }, 500); 
}

const loop = setInterval(() =>{
    
const obstaculoPosition = obstaculo.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
if (obstaculoPosition <= 120 && obstaculoPosition > 0  && marioPosition <80) {
   
    obstaculo.style.animation = 'none';
    obstaculo.style.left = `${obstaculoPosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./IMG/game-over.png";
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);

}

}, 10)


document.addEventListener('keydown', jump);