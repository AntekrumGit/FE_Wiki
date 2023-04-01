function updateTimer(isoDate, timerInfo) {
    const date = new Date(isoDate);

    setInterval(() => {
        const timerTillDate = date - Date.now();
        const seconds = Math.floor(timerTillDate / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        timerInfo.seconds = seconds % 60;
        timerInfo.minutes = minutes % 60;
        timerInfo.hours = hours;
    }, 500);
}

const timerInfo = { seconds: 0, minutes: 0, hours: 0 };
const isoDate = '2023-03-02T22:50:06.000+02:00';

updateTimer(isoDate, timerInfo);

setInterval(() => {
    console.log(timerInfo);
}, 1000);
