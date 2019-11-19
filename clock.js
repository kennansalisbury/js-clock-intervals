let hourHand = document.getElementById('hour')
let minuteHand = document.getElementById('minute')
let secondHand = document.getElementById('second')
let hands = [secondHand, minuteHand, hourHand]
let secDegree = 0
let minDegree = 0
let hourDegree = 0


//how many degrees hands should rotate around clock per second
const degreesPerSecond = (hand) => {
    switch(true) {
        case hand === secondHand:
            return 360/60
            break
        case hand === minuteHand:
            return 360/60/60
            break
        case hand === hourHand:
            return 360/60/60/12   
            break
        default:
            return false
    }
}

//function to make hands rotate
const tick = () => {
    
        secDegree += degreesPerSecond(secondHand)
        secondHand.style.transform = `rotate(${secDegree}deg)`

        minDegree += degreesPerSecond(minuteHand)
        minuteHand.style.transform = `rotate(${minDegree}deg)`

        hourDegree += degreesPerSecond(hourHand)
        hourHand.style.transform = `rotate(${hourDegree}deg)`
}

//set time intervals to add css style to each hand to rotate specified degrees each second
const startTick = () => {
    setInterval(tick, 1000)
}

document.addEventListener('DOMContentLoaded', () => {
    startTick()
})
