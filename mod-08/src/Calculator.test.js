import Calculator from './Calculator'

describe('can add', () => {

    let calc;

    beforeEach(() => {
        calc = new Calculator()

    })

    test('1 + 1', () => {

        const sum = calc.add(1, 1)

        expect(sum).toBe(2)

    })

    test('2 + 2', () => {

        const sum = calc.add(2, 2)

        expect(sum).toBe(4)

    })

    test('"2" + "3"', () => {

        const sum = calc.add("2", "3")

        expect(sum).toBe(5)

    })

})