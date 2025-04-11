function 走る (命令: string) {
    if (命令 == "前") {
        basic.showArrow(ArrowNames.North)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (命令 == "後") {
        basic.showArrow(ArrowNames.South)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (命令 == "前右") {
        basic.showArrow(ArrowNames.NorthEast)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (命令 == "前左") {
        basic.showArrow(ArrowNames.NorthWest)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (命令 == "後右") {
        basic.showArrow(ArrowNames.SouthEast)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (命令 == "後左") {
        basic.showArrow(ArrowNames.SouthWest)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else if (命令 == "停止") {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
走る("停止")
basic.forever(function () {
    走る("前")
    basic.pause(1000)
    走る("前右")
    basic.pause(1000)
    走る("前左")
    basic.pause(1000)
    走る("停止")
    basic.pause(1000)
    走る("後")
    basic.pause(1000)
    走る("後右")
    basic.pause(1000)
    走る("後左")
    basic.pause(1000)
    走る("停止")
    basic.pause(1000)
})
