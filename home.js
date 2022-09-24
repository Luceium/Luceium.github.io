//home page picture change test
let backgrounds = ["astronomicalMorning", "batGradient", "mexBeach", "rainyRocks", "rollingWaves", "schoolPink", "sf", "suspension", "windmill"];
let i = 0;

document.querySelector('header').addEventListener('click', function(){
        i = (i + 1) % backgrounds.length;
        console.log(`url('images/homepagePic/${backgrounds[i]}.JPG')`);
        this.style.backgroundImage = `url('images/homepagePic/${backgrounds[i]}.JPG')`;
    })
//

//adds on click functionality to flip project cards.
document.querySelectorAll('.flipper-card')
    .forEach(function(card){
        card.addEventListener('click', function (){
            this.classList.toggle('flipper-is-flipped');
        })
    });
//