basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
    basic.showLeds(`
        # # # # #
        # . # . #
        . # . # .
        # . . . #
        . # # # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
basic.forever(function () {
    music.playMelody("C5 B A C5 A C5 A B ", 181)
    music.playMelody("C5 F A C5 G F B D ", 179)
    music.playMelody("C5 B A G F E D C ", 150)
    music.playMelody("C5 A B G A F G E ", 421)
})
