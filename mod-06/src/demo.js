if (module.hot) {
    module.hot.dispose(function () {
        location.reload();
    })
}

let clickMe = document.getElementById('clickMe')
let square = document.querySelector('.square')
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers
    .map(n => ({ x: Math.pow(n, 2) }))
    .filter(obj => obj.x < 50)
    .forEach(obj => console.log('array.map', obj));

    
square.addEventListener('mousemove', e => {
    const obj = { x: e.clientX }
    if (obj.x < 50) {
        console.log('mousemove', obj)
    }
})


clickMe.addEventListener('click', () => {
    fetch('movies.json')
        .then(rsp => rsp.json())
        .then(movies => movies
            .map(m => ({ x: m.title.length }))
            .filter(obj => obj.x < 10)
        )
        .then(data => data
            .forEach(obj => console.log('fetch', obj)))
})
