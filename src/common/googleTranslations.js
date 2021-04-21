'use strict';

let url = `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY}`;

export default function googleTranslate (text, source, target) {
    url += '&q=' + encodeURI(text);
    url += `&source=${source}`;
    url += `&target=${target}`;
    
    const response = window.fetch(url, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .then(res => res.json())
        .then((response) => {
            if (response.error) {
                return text;
            }
            return response.data.translations[response.data.translations.length-1].translatedText.replace('&#39;', '\'');
        });
    return response;
}