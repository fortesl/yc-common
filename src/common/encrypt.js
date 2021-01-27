'use strict';

export const stringReverse = (string) => {
    const a = string.split('');
    a.reverse();
    return a.join('');
};

export const stringEncrypt = (string) => {
    return 'z' + stringReverse(string) + 'a';
};

export const stringDecrypt = (string) => {
    const trim =  string.substring(1, string.length-1);
    return stringReverse(trim);
};
