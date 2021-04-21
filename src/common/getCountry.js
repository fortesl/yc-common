import countries from './country-list';

export default function ({map, code, phoneCode, name}) {
    let country = null;

    if (map) 
        country = countries.filter(x => x.map === map);
    if (code) 
        country = countries.filter(x => x.code === code);
    if (phoneCode) 
        country = countries.filter(x => x.phoneCode === phoneCode);
    if (name) 
        country = countries.filter(x => x.value === name);
    return country ? country[0] : null;
}