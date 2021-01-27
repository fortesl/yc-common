import * as encrypt from '../../src/common/encrypt';

const testString = '1234567890';

test(`stringReverse(${testString})`, () => {
    const str = '0987654321';
    expect(encrypt.stringReverse(testString)).toBe(str);
});

test(`stringEncrypt(${testString})`, () => {
    expect(encrypt.stringReverse(testString)).not.toBe(testString);
});

test(`stringDecrypt(${testString})`, () => {
    const str = encrypt.stringEncrypt(testString);
    expect(encrypt.stringDecrypt(str)).toBe(testString);
});
