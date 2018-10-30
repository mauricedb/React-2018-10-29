import { from, fromEvent, interval } from 'rxjs'
import { map, filter, tap, take, concatMap, flatMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

if (module.hot) {
    module.hot.dispose(function () {
        location.reload();
    })
}

let clickMe = document.getElementById('clickMe')
let square = document.querySelector('.square')
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let numbers$ = from(numbers)
    .pipe(
        tap(console.log),
        map(n => ({ x: Math.pow(n, 2) })),
        tap(console.log),
        filter(obj => obj.x < 50)
    )

numbers$.subscribe(obj => console.log('observable from', obj)
    , e => console.error(e), () => console.log("The stream is closed"))

// numbers
//     .map(n => ({ x: Math.pow(n, 2) }))
//     .filter(obj => obj.x < 50)
//     .forEach(obj => console.log('array.map', obj));



let mousemove$ = fromEvent(square, 'mousemove')
    .pipe(
        map(e => ({ x: e.clientX })),
        filter(obj => obj.x < 50)
    )


mousemove$.subscribe(obj => console.log('observable fromEvent', obj))

// square.addEventListener('mousemove', e => {
//     const obj = { x: e.clientX }
//     if (obj.x < 50) {
//         console.log('mousemove', obj)
//     }
// })


// clickMe.addEventListener('click', () => {
//     fetch('movies.json')
//         .then(rsp => rsp.json())
//         .then(movies => movies
//             .map(m => ({ x: m.title.length }))
//             .filter(obj => obj.x < 10)
//         )
//         .then(data => data
//             .forEach(obj => console.log('fetch', obj)))
// })


let click$ = fromEvent(clickMe, 'click')
    .pipe(
        concatMap(() => ajax.getJSON('/movies.json')),
        flatMap(x => x),
        map(m => ({ x: m.title.length })),
        filter(obj => obj.x < 50)
    )
    .subscribe(value => console.log('AJAX', value), e => console.error(e), () => console.log("The stream is closed"));


interval(1000)
    .pipe(take(5))
    .subscribe(value => console.log(value), e => console.error(e), () => console.log("The stream is closed"));

























