//adds on click functionality to flip project cards.
document.querySelectorAll('.flipper-card')
    .forEach(function(card){
        card.addEventListener('click', function (){
            this.classList.toggle('flipper-is-flipped');
        })
    });