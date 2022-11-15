document.getElementById("text-start").style.color = "rgb(236, 236, 236)";

const clouds = document.querySelector('.clouds')
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')


const jump = () => {
    mario.classList.add('jump');


    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePositon = pipe.offsetLeft;
    const marioPositon = +window.getComputedStyle(mario).bottom.replace ('px', '');
    const cloudsPositon = +window.getComputedStyle(clouds).left.replace ('px', '')

    console.log(marioPositon);
   
    if (pipePositon <= 120 && pipePositon > 0 && marioPositon < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePositon}px`;

      

       mario.style.animation = 'none';
       mario.style.bottom = `${marioPositon}px`;


       clouds.style.animation = 'none';
       clouds.style.rigth = `${cloudsPositon}px`;

       document.getElementById("text-start").style.color = "black";
            document.getElementById("text-start").innerHTML="<strong>GAME OVER</strong>";


     

      
       mario.src = 'game-over.png';
       mario.style.width = '75px'
       mario.style.marginLeft = '50px'

        clearInterval(loop)
        
    }


}, 10);




document.addEventListener('keydown', jump);