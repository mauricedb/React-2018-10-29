class Calculator {
    // pre: HTMLPreElement;
    // inp: HTMLInputElement;
    constructor(pre, inp) {
        this.pre = pre;
        this.inp = inp;
        // this.pre = pre
        // this.inp = inp
    }
    add(x, y) {
        const sum = x + y;
        this.show(sum);
        return sum;
    }
    subtract(x, y) {
        const diff = x - y;
        this.show(diff);
        return diff;
    }
    show(result) {
        this.pre.textContent = result.toString();
        this.inp.value = result.toString();
    }
    get name() {
        return 'Maurice';
    }
}
const pre = document.getElementById('result1');
const inp = document.getElementById('result2');
inp.value = '12';
const calc = new Calculator(pre, inp);
console.log('1 + 2 =', calc.add(1, 2));
console.log('50 - 8 =', calc.subtract(50, 8));
// calc.name = 'Demo'
console.log(calc.name);
class Demo {
    constructor(firstName) {
        this.firstName = firstName;
    }
}
const p = new Demo('Maurice');
function sayHello(p) {
    console.log('Hello ' + p.firstName);
}
function betterSayHello(p) {
    console.log('Hello ' + p.firstName);
}
sayHello(p);
sayHello({ firstName: 'Kai', lastName: '' });
const x = { firstName: 'Kai', lastName: '', age: 1 };
sayHello(x);
//# sourceMappingURL=demo.js.map