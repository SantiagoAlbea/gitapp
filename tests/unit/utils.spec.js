const { monefy, friendlyDate } = require('../../client/js/utils.js');

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

test('Should convert "2021-06-16T14:31:54.214Z" into "16/6/2021"', async () => {
    expect(friendlyDate('2021-06-16T14:31:54.214Z')).toBe('16/6/2021');
});

test('Should convert "2021-01-01T03:00:00.000Z" into "1/1/2021"', async () => {
    expect(friendlyDate('2021-01-01T03:00:00.000Z')).toBe('1/1/2021');
});

test('Should convert "Wed Jun 16 2021" into "16/6/2021"', async () => {
    expect(friendlyDate('Wed Jun 16 2021')).toBe('16/6/2021');
});

test('Should convert "Wed Jun 16 2021 11:42:46 GMT-0300" into "16/6/2021"', async () => {
    expect(friendlyDate('Wed Jun 16 2021 11:42:46 GMT-0300')).toBe('16/6/2021');
});

test('Should convert "Wed, 16 Jun 2021 14:42:46 GMT" into "16/6/2021"', async () => {
    expect(friendlyDate('Wed, 16 Jun 2021 14:42:46 GMT')).toBe('16/6/2021');
});