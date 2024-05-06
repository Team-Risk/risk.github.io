const themeToggleBtn = document.querySelector('.imgimg');


const theme = localStorage.getItem('theme');

var realtheme = document.querySelector(':root');

console.log(theme);

function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }
/*
if (theme) {
    realtheme.style.setProperty('--clr-dark', 'white')
    realtheme.style.setProperty('--clr-light', 'black')
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode')
        realtheme.style.setProperty('--clr-dark', 'white')
        realtheme.style.setProperty('--clr-light', 'black')

        console.log("light mode on")
    } else {
        localStorage.removeItem('theme')
        console.log("dark mode off")
        realtheme.style.setProperty('--clr-dark', 'black')
        realtheme.style.setProperty('--clr-light', 'white')
    }
    
})
*\