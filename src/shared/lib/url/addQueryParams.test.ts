import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    let windowSpy: any;

    beforeEach(() => {
        windowSpy = jest.spyOn(window, 'window', 'get');
    });

    afterEach(() => {
        windowSpy.mockRestore();
    });
    it('test with one params', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    it('test with manyk params', () => {
        const params = getQueryParams({
            test: 'value',
            test2: 'value2',
        });
        expect(params).toBe('?test=value&test2=value2');
    });
    it('test with undefined', () => {
        const params = getQueryParams({
            test: undefined,
        });
        expect(params).toBe('?');
    });
    it('test when we have params in url', () => {
        windowSpy.mockImplementation(() => ({
            location: {
                search: '?test=value',
            },
        }));
        const params = getQueryParams({
            test2: 'value2',
        });
        expect(params).toBe('?test=value&test2=value2');
    });
});
