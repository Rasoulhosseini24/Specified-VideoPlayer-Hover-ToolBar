const container = document.querySelector('.containerr')
const main = container.querySelector('.main')
const video = main.querySelector('video')
const crtl = main.querySelector('.crtl')
const progressBar = crtl.querySelector('.progress-bar')
const progresss = progressBar.querySelector('.progres')
const keys = crtl.querySelector('.keys')
const play = keys.querySelector('.fa-play')
const pause = keys.querySelector('.fa-pause')
const soundd = crtl.querySelector('.sound')
const volprog = crtl.querySelector('.vol-progress')
const soundProgress = soundd.querySelector('input')


play.addEventListener('click', () => {
    video.play()
})
pause.addEventListener('click', () => {
    video.pause()
})

video.addEventListener('timeupdate', () => {

    let durpos = (video.currentTime / video.duration) * 100;
    progresss.style.width = `${durpos}%`
})

progressBar.addEventListener('click', (e) => {

    const progTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = progTime;

})

soundd.addEventListener('input', () => {
    volprog.style.width = soundProgress.value + "%";
    video.volume = soundProgress.value / 100;
}, false)

