basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() < 45) {
        basic.showArrow(ArrowNames.North)
        basic.pause(1000)
        basic.showString("N")
        basic.pause(1000)
    } else if (input.compassHeading() < 135) {
        basic.showArrow(ArrowNames.East)
        basic.pause(1000)
        basic.showString("E")
        basic.pause(1000)
    } else if (input.compassHeading() < 225) {
        basic.showArrow(ArrowNames.South)
        basic.pause(1000)
        basic.showString("S")
        basic.pause(1000)
    } else if (input.compassHeading() < 315) {
        basic.showArrow(ArrowNames.West)
        basic.pause(1000)
        basic.showString("W")
        basic.pause(1000)
    } else {
        basic.showString("N")
    }
})
