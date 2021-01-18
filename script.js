const sounds = ['running-on-ground', 'running-on-snow', 'door-open', 'door-close']

sounds.forEach(sound => {
    const button = document.createElement('button')
    button.classList.add('button')

    button.innerText = sound

    button.addEventListener('click', ()=>{
        stopEffect()
        
        document.getElementById(sound).play()
    })

    document.querySelector('#buttons').appendChild(button)
});

function stopEffect(){
    sounds.forEach(sound => {
        const effect = document.getElementById(sound)

        effect.pause()
        effect.currentTime = 0;
    
    });
}