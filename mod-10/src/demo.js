"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Calculator {
    constructor(pre, inp) {
        this.pre = pre;
        this.inp = inp;
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
        // if (this.pre) {
        this.pre.textContent = result.toString();
        // }
        this.inp.value = result.toString();
    }
    get name() {
        return 'Maurice';
    }
}
const pre = document.getElementById('result1');
const inp = document.getElementById('result2');
if (pre) {
    const calc = new Calculator(pre, inp);
    console.log('1 + 2 =', calc.add(1, 2));
    console.log('50 - 8 =', calc.subtract(50, 8));
}
class Cat {
    eat() {
        console.log('Cat is eating');
    }
    climb() {
        console.log('Cat is climbing');
    }
}
class Dog {
    eat() {
        console.log('Dog is eating');
    }
    bark() {
        console.log('Dog is barking');
    }
}
function doStuff(animal) {
    if (animal) {
        animal.eat();
    }
    if (animal instanceof Dog) {
        animal.bark();
    }
    if (animal instanceof Cat) {
        animal.climb();
    }
}
doStuff(new Cat());
doStuff(new Dog());
doStuff({ eat() { }, bark() { } });
doStuff(null);
doStuff(undefined);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rsp = yield fetch('movies.json');
            if (rsp.ok) {
                const data = yield rsp.json();
                return data;
            }
        }
        catch (err) {
            console.log(err);
        }
        return null;
    });
}
getData();
var zorro = {
    name: 'Zorro',
    eat(food) {
        console.log(this.name, 'is eating', food);
    }
};
zorro.eat('meat');
const eat = zorro.eat;
//   eat('')
//# sourceMappingURL=demo.js.map