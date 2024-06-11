const startButton = document.getElementById('startButton');
const status = document.getElementById('status');

const reminders = [
    { time: '05:10', message: 'Morning tuition starts now.' },
    { time: '07:00', message: 'School time.' },
    { time: '15:30', message: 'Take a break.' },
    { time: '16:00', message: 'Review notes/Quick revision.' },
    { time: '17:00', message: 'Evening tuition starts now.' },
    { time: '18:30', message: 'Walk the dog.' },
    { time: '19:00', message: 'Tuition time (if scheduled).' },
    { time: '20:00', message: 'Self-study time.' },
    { time: '20:30', message: 'Dinner time.' },
    { time: '21:30', message: 'Self-study (revision).' },
    { time: '22:30', message: 'Prepare for the next day and wind down.' }
];

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

function checkReminders() {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);

    reminders.forEach(reminder => {
        if (reminder.time === currentTime) {
            speak(reminder.message);
            status.textContent = `Last reminder: ${reminder.message}`;
        }
    });
}

startButton.addEventListener('click', () => {
    speak('Voice Assistant activated. I will remind you of your tasks.');
    status.textContent = 'Voice Assistant is running...';

    setInterval(checkReminders, 60000); // Check every minute
});
