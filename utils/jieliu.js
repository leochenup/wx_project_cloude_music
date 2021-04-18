
function jieLiu() {
    let timer
    return function (func, time) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func()

        }, time)
    }
}

export default jieLiu()
