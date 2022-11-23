let screen_data = '';

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');

    canvas.setAttribute('width', window.innerWidth)
    canvas.setAttribute('height', window.innerHeight)
});


window.addEventListener('resize', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // change width and height
    canvas.setAttribute('width', window.innerWidth)
    canvas.setAttribute('height', window.innerHeight)

    // load old canvas into current canvas
    let old_screen = new Image;
    old_screen.onload = function(){
        ctx.drawImage(old_screen, 0, 0)
    };
    old_screen.src = screen_data;
});