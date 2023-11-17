let Distance = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    Distance = Tinybit.Ultrasonic_Car()
    if (Distance < 15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
        basic.pause(100)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 100)
        basic.pause(100)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
})
