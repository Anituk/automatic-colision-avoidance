let sonar = 0
input.onButtonPressed(Button.A, function () {
    cuteBot.forward()
})
input.onButtonPressed(Button.B, function () {
    cuteBot.stopcar()
})
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 15) {
    	
    } else {
    	
    }
})
