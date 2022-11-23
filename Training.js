class Point {
    constructor() {
        let aspect = window.innerWidth / window.innerHeight

        this.x = Math.floor(Math.random() * window.innerWidth);
        this.y = Math.floor(Math.random() * window.innerHeight);
        this.inputs = [this.x, this.y];
        this.label = null;

        if (this.x > this.y * aspect) {
            this.label = 1;
        } else {
            this.label = -1;
        };
    };

    show () {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        // draw a circle representing the location of the point
        // green is 1, red is -1
        if (canvas.getContext) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 10, 0, 2*Math.PI, true);
            ctx.fillStyle = 'black';
            ctx.fill();
            ctx.stroke();
        };
    };

    changeColor(equal) {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        if (equal) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 10, 0, 2*Math.PI, true);
            (this.label == 1) ? ctx.fillStyle = 'blue' : ctx.fillStyle = 'orange'
            ctx.fill();
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 10, 0, 2*Math.PI, true);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.stroke();
        };
    };
}

let points = [];
let trainingIndex = 0;
let percept = new Perceptron();

const draw = (() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    window.addEventListener('load', () => {

        // draw y = -x line
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(window.innerWidth, window.innerHeight);
        ctx.stroke();

        for (let i = 0; i < 100; i++) {
            points.push(new Point())
            points[i].show()
            screen_data = canvas.toDataURL();
        }
    });
})();

let interval = setInterval(() => {
    let current = points[trainingIndex % points.length];
    let inputs = current.inputs;
    let target = current.label;

    percept.train(inputs, target);

    let output = percept.getOutput(inputs);
    if (output == target) {
        current.changeColor(true);
    } else {
        current.changeColor(false);
    }

    if (trainingIndex == points.length) {
        trainingIndex = 0;
    } else if (trainingIndex > 100) {
        console.log('finishing');
        clearInterval(interval);
    } else {
        trainingIndex++
    }

}, 30);