const { monefy } = require('../../client/js/utils.js');

test('Should convert 1000 into "1.000"', async () => {
    expect(monefy(1000)).toBe('1.000');
});

test('Should convert 100 into "100"', async () => {
    expect(monefy(100)).toBe('100');
});

test('Should convert undefined into ""', async () => {
    expect(monefy(undefined)).toBe('');
});

test('Should convert 200.5 into "200,50"', async () => {
    expect(monefy(200.5)).toBe('200,50');
});

test('Should convert 2000.5 into "2.000,50"', async () => {
    expect(monefy(2000.5)).toBe('2.000,50');
});

test('Should convert 2000.555 into "2.000,55"', async () => {
    expect(monefy(2000.555)).toBe('2.000,55');
});
