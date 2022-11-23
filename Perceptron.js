class Perceptron {
    // Initialize random weights for new Perceptron obj
    constructor() {
        this.weights = [];
        this.learningRate = 0.1;

        // sets weight to random value between -1 and 1
        for (let i = 0; i < 2; i++) {
            this.weights[i] = (Math.random() * 2 - 1) 
        };
    };
    
    // Sums the weights and corresponding inputs
    getOutput(inputArr) {
        let result = 0;

        // peice-wise addition of weight * value
        for (let i = 0; i < this.weights.length; i++) {
            result += inputArr[i] * this.weights[i];
        };

        // activation func: return 1 if value is greater than 0, else -1
        return (result >= 0) ? 1 : -1;
    };

    // recieves inputs and target to adjust weights
    train(inputArr, targetInt) {
        let guess = this.getOutput(inputArr);
        let error = targetInt - guess;

        // tune weights according to supervision
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputArr[i] * this.learningRate;
        }

    };

};