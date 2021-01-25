'use strict';

export const getLocalStorage = (item) => {
    const json = window.localStorage.getItem(item);
    return json ? JSON.parse(json) : null;
};

export const getSessionStorage = (item) => {
    const json = window.sessionStorage.getItem(item);
    return json ? JSON.parse(json) : null;
};

export const setLocalStorage = (item, value) => {
    window.localStorage.setItem(item, JSON.stringify(value));
};

export const setSessionStorage = (item, value) => {
    window.sessionStorage.setItem(item, JSON.stringify(value));
};

export const getCookie = (cname) => {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(window.document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
};

export const setCookie =  (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = 'expires='+ d.toUTCString();
    window.document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/;';
};
