
const button = document.getElementById('button-select')
const task = document.getElementById('task')
const description = document.getElementById('description')
const entryTable = document.getElementById('entries')
const counterValue = document.getElementById('counter-value')
const timerControl = document.getElementById('timer-control')
const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')


function addTask() {
  entryTable.innerHTML += `<tr>
  <td>${task.value}</td>
  <td>${description.value}</td>
  <td>${hours.textContent}:${minutes.textContent}:${seconds.textContent}</td>
  </tr>`
  console.log(counterValue)

  task.value = ''
  description.value = ''
  hours.textContent = '00'
  minutes.textContent = '00'
  seconds.textContent = '00'
}

let intervalId

function startTimer() {
  if (timerControl.textContent === 'start') {
    //running the counter
    let s = 0
    let m = 0
    let h = 0
    intervalId = setInterval(function () {
      s++
      if (s >= 60) {
        s = 0
        m++
      }
      else if (m >= 60) {
        m = 0
        h++
      }

      seconds.textContent = s.toString().padStart(2, '0')
      minutes.textContent = m.toString().padStart(2, '0')
      hours.textContent = h.toString().padStart(2, '0')
    }, 10)
    timerControl.textContent = 'stop'
    timerControl.style.setProperty('background-color', 'tomato')
  }
  else if (timerControl.textContent === 'stop') {
    timerControl.textContent = 'start'
    timerControl.style.setProperty('background-color', 'green')

    // Stop the timer
    clearInterval(intervalId)

    // Add the task details to the table
    addTask();
  }
}

timerControl.addEventListener('click', startTimer)





