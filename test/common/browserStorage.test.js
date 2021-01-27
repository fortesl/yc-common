import * as bs from '../../src/common/browserStorage';

const testObject = {
    name: 'Jon Manel',
    age: 36,
    married: true,
    birthDay: new Date(1965, 4, 1)
};

test('setLocalStorage', () => {
    expect(typeof bs.setLocalStorage).toBe('function');
});

test('getLocalStorage', () => {
    bs.setLocalStorage('test', testObject);
    const obj = bs.getLocalStorage('test');
    expect(obj).not.toBe(null);
    expect(obj.name).toBe('Jon Manel');
    expect(obj.age).toBe(36);
    expect(obj.married).toBe(true);
    expect(new Date(obj.birthDay).getMonth()).toBe(4);
});