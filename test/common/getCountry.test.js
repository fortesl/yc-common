import getCountry from '../../src/common/getCountry';

const map = 'cv';
const code = 'CV';
const phoneCode= 238;
const name = 'Cabo Verde';

test('get from map', (map)=> {
    expect(getCountry({map}).code).toBe(code);
});

test('get from phoneCode', (phoneCode)=> {
    expect(getCountry({phoneCode}).value).toBe(name);
});

test('get from code', (code)=> {
    expect(getCountry({code}).map).toBe(map);
});

test('get from name', (name)=> {
    expect(getCountry({name}).phoneCode).toBe(phoneCode);
});