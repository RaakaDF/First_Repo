let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let btnpause = document.querySelector('.pauseButton');
let btn2 = document.querySelector('.resumeButton');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');
vie = document.querySelector('.vie');
music = document.querySelector('.musique');
music2 = document.querySelector('.musique2');
music3 = document.querySelector('.musique3');

let isPaused = false;
let score = 0;
let time = 30;
let interval;

function gameLoop() {
    if (!isPaused) {
        //logique du jeu 
        let target = document.createElement('img');
        target.id = "target";
        target.src = "gopher.png";
        container.appendChild(target);
        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';

        setTimeout(function () {
            target.remove();
        }, 2000);

        target.onclick = function () {
            music3.play();
            score += 1;
            target.style.display = 'none';
        };

        time -= 1;
        scoreContainer.innerHTML = `Score : ${score}`;
        timeContainer.innerHTML = `Temps : ${time}`;
        if (time === 0) {
            clearInterval(interval);
            vie.style.display ='none';
            container.innerHTML = "You are dead";
            music.pause();
            music2.play();
            
        
        }  
    }

    interval = setTimeout(gameLoop, 1000); // Planifie la prochaine itération après 1 seconde
        
    if (time === 0) {
        clearInterval(interval);
        vie.style.display ='none';
        container.innerHTML = "You are dead";
    }
}

// Gestionnaire d'événement pour le bouton "start_btn" pour démarrer le jeu
btn.addEventListener('click', function () {
    score = 0;
    time = 30;
    container.innerHTML = "";
    music.currentTime = 0;
    if (music.paused) {
        music.play();
    }
    music.play();
    isPaused = false; // Assurez-vous que le jeu est en cours d'exécution (non en pause)
    vie.style.display = 'inline'; // Affiche l'image de vie
    requestAnimationFrame(gameLoop);; // Démarrer la boucle de jeu
    
});

// Gestionnaire d'événement pour le bouton "pauseButton" pour mettre en pause le jeu
btnpause.addEventListener('click', function () {
    isPaused = true;
    container.innerHTML = "pause";
    music.pause();
});

// Gestionnaire d'événement pour le bouton "resumeButton" pour reprendre le jeu
btn2.addEventListener('click', function () {
    container.innerHTML = "";
    isPaused = false; // Assurez-vous que le jeu reprend (n'est pas en pause)
    //vie.style.display ='inline';
    gameLoop(); // Reprendre la boucle de jeu
    if (music.paused) {
        music.play();
    }
});
