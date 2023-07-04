// Countdown to Ahsoka Aug 23 2023 - day countdown
const countdownDays = document.querySelector('.countdown-days')
const countdown = () => {
  const countDate = new Date('August 23, 2023').getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  // convert miliseconds to days
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  // calculate day gap
  const displayDay = Math.floor(gap / day)
  countdownDays.textContent = displayDay
}
countdown()
