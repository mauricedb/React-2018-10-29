function reduceIncrement(state, action) {
    return { ...state, value: state.value + action.payload }
}

function reduceDecrement(state, action) {
    return { ...state, value: state.value - action.payload }
}



const handlers = {
    INCREMENT: reduceIncrement,
    DECREMENT: reduceDecrement
}

const reducer = (state = { value: 0, firstName: 'Maurice' }, action) => {

    console.log(state, action)

    const fn = handlers[action.type]
    if (fn) {
        return fn(state, action)
    }
    return state

    // switch (action.type) {
    //     case 'INCREMENT':
    //         return { ...state, value: state.value + action.payload }
    //     case 'DECREMENT':
    //         return { ...state, value: state.value - action.payload }
    //     default:
    //         return state;
    // }
}

export default reducer