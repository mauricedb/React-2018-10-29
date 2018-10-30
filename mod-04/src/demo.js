

function createIncrement(value) {

    const action = {
        type: 'INCREMENT',
        payload: value
    }

    return action;
}
function createDecrement(value) {

    const action = {
        type: 'DECREMENT',
        payload: value
    }

    return action;
}


const listeners = [];

const store = {
    value: 0,
    handleAction(action) {

        switch (action.type) {
            case 'INCREMENT':
                this.value += action.payload
                break;
            case 'DECREMENT':
                this.value -= action.payload
                break;
        }

        listeners.forEach(l => l(this.value))

    }
}

function dispatch(action) {
    store.handleAction(action)
}



listeners.push(v => console.log(`The value is ${v}`))



const a = createIncrement(5);
dispatch(a);



listeners.push(v => console.log(`The second value is ${v}`))

dispatch(createDecrement(3))


// console.log(store)

setTimeout(() => dispatch(createIncrement(123)), 1000)