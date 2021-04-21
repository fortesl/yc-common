export default function localizedTime (timeStr, localIn) {

    const local = window.navigator.language.split('-')[0];

    const hourMinute = timeStr.split(':');

    if (hourMinute.length == 1) hourMinute[1] = '00';

    if (local !== 'fr' && localIn != 'fr') {
        const amPm = hourMinute[0] >= 12 ? 'pm' : 'am';
        const hour = hourMinute[0] > 12 ? hourMinute[0] - 12 : hourMinute[0];
        return `${hour}:${hourMinute[1]} ${amPm}`;
    } else {
        return `${hourMinute[0]}h${hourMinute[1]}`;
    }

}