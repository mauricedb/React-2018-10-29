export const createIncrement = value => ({
    type: 'INCREMENT',
    payload: value
})

export const createDecrement = value => ({
    type: 'DECREMENT',
    payload: value
})