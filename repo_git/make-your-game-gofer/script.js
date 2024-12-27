let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

function gameLoop() {
    // Votre logique de jeu ici
    
    // Mettre à jour le fond du jeu
    document.body.style.backgroundColor = "blue"; // Remplacez "blue" par la couleur souhaitée
    
    // Planifier la prochaine itération de la boucle de jeu
    requestAnimationFrame(gameLoop);
  }
gameLoop()
  

btn.addEventListener('click', function() {
    let score = 0;
    let time = 30;
    container.innerHTML = "";

    let interval = setInterval(function() {

        let target = document.createElement('img');
        target.id = "target";
        target.src = "gopher.png";
        container.appendChild(target);
        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';

        setTimeout(function() {
            target.remove();
        }, 2000);

        target.onclick = function() {
            score += 1;
            target.style.display = 'none';
        };
        time -= 1;
        scoreContainer.innerHTML = `Score : ${score}`;
        timeContainer.innerHTML = `Temps : ${time}`;

        if (time === 0) {
            clearInterval(interval);
            container.innerHTML = "Le jeu est terminé";
        }
    }, 1000);
});
