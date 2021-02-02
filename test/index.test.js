import * as index from '../src/index';

test('googleTranslate', () => {
    expect(typeof index.googleTranslate).toBe('function');
});

test('reservationStatus', () => {
    expect(typeof index.reservationStatus).toBe('object');
});

test('messageTypes', () => {
    expect(typeof index.messageTypes).toBe('object');
});

test('getCurrencyPrice', () => {
    expect(typeof index.getCurrencyPrice).toBe('function');
});

test('refreshBrowser', () => {
    expect(typeof index.refreshBrowser).toBe('function');
});

test('validateEmail', () => {
    expect(typeof index.validateEmail).toBe('function');
});

test('getLocalStorage', () => {
    expect(typeof index.getLocalStorage).toBe('function');
});
test('setLocalStorage', () => {
    expect(typeof index.setLocalStorage).toBe('function');
});
test('getSessionStorage', () => {
    expect(typeof index.setSessionStorage).toBe('function');
});test('setSessionStorage', () => {
    expect(typeof index.setSessionStorage).toBe('function');
});
test('getCookie', () => {
    expect(typeof index.getCookie).toBe('function');
});
test('setCookie', () => {
    expect(typeof index.setCookie).toBe('function');
});

test('stringEncrypt', () => {
    expect(typeof index.stringEncrypt).toBe('function');
});
test('stringDecrypt', () => {
    expect(typeof index.stringDecrypt).toBe('function');
});
test('stringReverse', () => {
    expect(typeof index.stringReverse).toBe('function');
});

test('localTIme', () => {
    expect(typeof index.localTime).toBe('function');
});