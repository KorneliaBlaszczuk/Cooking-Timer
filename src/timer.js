let countdown;
const timerDisplay = document.getElementById("timer");
const alarmSound = document.getElementById("alarm-sound");
const urlParams = new URLSearchParams(window.location.search);
const task = urlParams.get('task') || "Timer";
const time = urlParams.get('time') || 10;

let totalTime = time * 60;

function displayName(task) {
    const taskTitle = document.getElementById('task-title');
    taskTitle.textContent = task;
}

displayName(task);

// Update display to show the current time
function updateDisplay(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

// Start the timer
function startTimer() {
    clearInterval(countdown); // Clear any existing intervals
    updateDisplay(totalTime); // Initial display update

    countdown = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdown);
            alarmSound.play();
        } else {
            totalTime--;
            updateDisplay(totalTime);
        }
    }, 1000);
}

// Stop the timer
function stopTimer() {
    clearInterval(countdown);
}

// Reset the timer to 5 minutes
function resetTimer() {
    clearInterval(countdown);
    totalTime = 600;
    updateDisplay(totalTime);
}


updateDisplay(totalTime);
