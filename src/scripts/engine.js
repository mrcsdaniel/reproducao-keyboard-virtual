// Comando add o audio
const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
//Faz remove e add  a letras das teclas
const keycheck = document.querySelector(".keys-check input");

let mapedkey = [];
let audio = new Audio("src/tunes/a.wav")

const playTune = (key) =>{
    audio.src = `src/tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");setTimeout(()=>{clickedKey.classList.remove("active");
}, 150);
};
pianoKeys.forEach((key)=>{
    key.addEventListener("click",()=> playTune(key.dataset .key));mapedkey.push(key.dataset .key)
});

// Comando pega a posição das teclas do teclado
document.addEventListener("keydown",(e) => { 
    if (mapedkey.includes(e.key)) { 
        playTune(e.key);
    }
});
const handleVolume = (e) => {audio.volume = e.target.value;
};

// Faz remove e add  a letras das teclas
const showhideKeys = () =>{ pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume);

//Faz remove e add a letras das teclas
keycheck.addEventListener("click",showhideKeys);