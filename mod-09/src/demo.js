class Calculator {
    constructor(el) {
        this.el = el
    }
    
    add(x, y) {
        const sum = x + y
        this.el.textContent = sum
        return sum;
    }

    subtract(x, y) {
        const diff = x - y
        this.el.textContent = diff
        return diff;
    }
}


const pre = document.getElementById('result')

const calc = new Calculator(pre)

console.log('1 + 2 =', calc.add(1, 2));

console.log('50 - 8 =', calc.subtract(50, 8))