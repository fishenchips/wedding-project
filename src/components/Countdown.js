import React, {useState, useEffect} from 'react'

function Countdown() {
    //Creating hooks for days, hours, minutes and seconds remaining
    const [timerDays, setTimerDays] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMin, settimerMin] = useState()
    const [timerSec, settimerSec] = useState()

    //initate an interval
    let interval;

    const startTimer= () => {
        // date of wedding
        const countDownDate = new Date("September 10, 2022 13:00").getTime()

        interval= setInterval( ()=> {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            //to calculate time for days, hours, minutes and seconds
            const days = Math.floor(distance / (24 * 60 * 60 * 1000) )

            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60) )

            const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60) )

            const seconds = Math.floor(distance % (60 * 1000) / (1000) )

            distance < 0
                // if distance is less than 0, stop the timer, clear interval
                ? clearInterval(interval)
                //otherwise update the timer until above is true
                : 
                    setTimerDays(days)
                    setTimerHours(hours)
                    settimerMin(minutes)
                    settimerSec(seconds)
        })
    }

    //componentDidMount
    useEffect( () => {
        startTimer()
    })

  return (
    <section className='timerContainer'>
        <section className='timer'>
            <div className='clock'>
                <p className='dagar'>{timerDays} Dagar</p>
                <p className='timmar'>{timerHours} Timmar</p>
                <p className='minuter'>{timerMin} Minuter</p>
                <p className='sekunder'>{timerSec} Sekunder</p>
            </div>
        </section>
    </section>
  )
}

export default Countdown