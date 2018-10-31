class Calculator {
    // pre: HTMLPreElement;
    // inp: HTMLInputElement;

    constructor(private pre: HTMLPreElement, public inp: HTMLInputElement) {
        // this.pre = pre
        // this.inp = inp
    }

    add(x: number, y: number): number {
        const sum = x + y
        this.show(sum)
        return sum;
    }

    subtract(x: number, y: number) {
        const diff = x - y
        this.show(diff)
        return diff;
    }

    show(result: number) {
        this.pre.textContent = result.toString()
        this.inp.value = result.toString()
    }


    get name() {
        return 'Maurice'
    }
}


const pre = document.getElementById('result1') as HTMLPreElement
const inp: HTMLInputElement = document.getElementById('result2') as HTMLInputElement


inp.value = '12'

const calc = new Calculator(pre, inp)

console.log('1 + 2 =', calc.add(1, 2));

console.log('50 - 8 =', calc.subtract(50, 8))


// calc.name = 'Demo'

console.log(calc.name)




interface Person {
    lastName: string
    firstName: string
}


class Demo {
    lastName: string
    constructor(public firstName: string) {
    }
}


const p: Person = new Demo('Maurice')



function sayHello(p: Person) {
    console.log('Hello ' + p.firstName)
}



function betterSayHello(p: { firstName: string }) {
    console.log('Hello ' + p.firstName)
}


sayHello(p)

sayHello({ firstName: 'Kai', lastName: ''})



const x = { firstName: 'Kai', lastName: '', age: 1 }

sayHello(x)

