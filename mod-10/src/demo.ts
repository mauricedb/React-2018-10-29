class Calculator {

    constructor(private pre: HTMLPreElement, public inp: HTMLInputElement) {
    }

    add(x, y) {
        const sum = x + y
        this.show(sum)
        return sum;
    }

    subtract(x, y) {
        const diff = x - y
        this.show(diff)
        return diff;
    }

    show(result) {
        this.pre.textContent = result.toString()
        this.inp.value = result.toString()
    }


    get name() {
        return 'Maurice'
    }
}


const pre = document.getElementById('result1') as HTMLPreElement
const inp: HTMLInputElement = document.getElementById('result2') as HTMLInputElement


const calc = new Calculator(pre, inp)
console.log('1 + 2 =', calc.add(1, 2));
console.log('50 - 8 =', calc.subtract(50, 8))


class Cat {
    eat() {
    }
    climb() {
    }
}

class Dog {
    eat() {
    }
    bark() {
    }
}

function doStuff(animal) {

}

doStuff(new Cat())
doStuff(new Dog())
