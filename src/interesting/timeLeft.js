//lib - "date-fns" OR:

const rtf = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
    style: 'long',
    localeMatcher: 'best fit',
});

// function getRelativeTimeString(date: Date | Number, lanf = navigator.language) {
function getRelativeTimeString(date, lanf = navigator.language) {
    const timeMs = typeof date === 'number' ? date : date.getTime();
    const lang = navigator.language;
    const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);
    const cutoffs = [
        60,
        3600,
        86400,
        86400 * 7,
        86400 * 30,
        86400 * 365,
        Infinity,
    ];
    //units: Intl.RelativeTimeFormat[]
    const units = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
    const unitIndex = cutoffs.findIndex(
        (cutoff) => cutoff > Math.abs(deltaSeconds)
    );
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });
    return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
}

console.log(getRelativeTimeString(new Date('2023-01-28T13:38:04'), 'ru'));
