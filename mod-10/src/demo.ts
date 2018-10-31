class Calculator {

    constructor(private pre: HTMLElement, public inp: HTMLInputElement) {
    }

    add(x: number, y: number) {
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
        // if (this.pre) {
        this.pre.textContent = result.toString()
        // }
        this.inp.value = result.toString()
    }


    get name() {
        return 'Maurice'
    }
}


const pre = document.getElementById('result1')
const inp = document.getElementById('result2') as HTMLInputElement
if (pre) {
    const calc = new Calculator(pre, inp)
    console.log('1 + 2 =', calc.add(1, 2));
    console.log('50 - 8 =', calc.subtract(50, 8))
}

class Cat {
    eat() {
        console.log('Cat is eating')
    }
    climb() {
        console.log('Cat is climbing')
    }
}

class Dog {
    eat() {
        console.log('Dog is eating')
    }
    bark() {
        console.log('Dog is barking')
    }
}

function doStuff(animal: Cat | Dog | null | undefined) {
    if (animal) {
        animal.eat()
    }

    if (animal instanceof Dog) {
        animal.bark()
    }
    if (animal instanceof Cat) {
        animal.climb()
    }
}

doStuff(new Cat())
doStuff(new Dog())


doStuff({ eat() { }, bark() { } })

doStuff(null)
doStuff(undefined)

async function getData() {
    try {
        const rsp = await fetch('movies.json')
        if (rsp.ok) {
            const data = await rsp.json()

            return data
        }
    }
    catch (err) {
        console.log(err)
    }
    return null
}




getData()


var zorro = {
    name:'Zorro',
    eat(this: {name: string}, food: string) {
      console.log(
        this.name, 'is eating', food);
    }
  };
  
  zorro.eat('meat');

  
  const eat = zorro.eat
//   eat('')