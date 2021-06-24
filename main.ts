function Display_Update () {
    OLED12864_I2C.showString(
    0,
    0,
    "L: " + OrientBit.getwheelPulseCount(OrientBit.wheelSide.left),
    0
    )
    OLED12864_I2C.showString(
    0,
    2,
    "R: " + OrientBit.getwheelPulseCount(OrientBit.wheelSide.right),
    0
    )
    OLED12864_I2C.showString(
    0,
    4,
    "Diff: " + (OrientBit.getwheelPulseCount(OrientBit.wheelSide.left) - OrientBit.getwheelPulseCount(OrientBit.wheelSide.right)),
    1
    )
}
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(false)
OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
OrientBit.resetWheelRotCnt()
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
while (OrientBit.getwheelDist(OrientBit.wheelSide.left) <= 48) {
    basic.pause(50)
}
maqueen.motorStop(maqueen.Motors.All)
Display_Update()
basic.forever(function () {
	
})
