import localTime from '../../src/common/localizedTime';

test('localTime - am', () => {
    const str = localTime('9:45');
    expect(str).toBe('9:45 am');
});

test('localTime - pm', () => {
    const str = localTime('18');
    expect(str).toBe('6:00 pm');
});

test('localTime - french', () => {
    const str = localTime('18:12', 'fr');
    expect(str).toBe('18.12');
});



