'use strict';

export const encrypt = (string) => {
    return 'z' + reverse(string) + 'a';
};

export const decrypt = (string) => {
    const trim =  string.substring(1, string.length-1);
    return reverse(trim);
};

export const reverse = (string) => {
    const a = string.split('');
    a.reverse();
    return a.join('');
};
