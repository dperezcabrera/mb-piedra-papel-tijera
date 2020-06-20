let jugada = 0
input.onGesture(Gesture.Shake, function () {
    jugada = randint(0, 2)
    if (jugada == 0) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (jugada == 1) {
        basic.showLeds(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
