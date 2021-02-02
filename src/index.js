'use strict';

export {default as googleTranslate} from './common/googleTranslations';

export { reservationStatus, messageTypes } from './common/enums';

export {default as getCurrencyPrice} from './common/getCurrentPrice';

export {default as refreshBrowser} from './common/refreshBrowser';

export {default as validateEmail} from './common/validate-email';

export {default as localTime} from './common/localizedTime';

export {
    getLocalStorage,
    setLocalStorage,
    getSessionStorage,
    setSessionStorage,
    getCookie,
    setCookie
} from './common/browserStorage';

export {
    stringEncrypt,
    stringDecrypt,
    stringReverse
} from './common/encrypt';
