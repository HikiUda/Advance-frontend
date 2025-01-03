import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            'someClass class1 class2',
        );
    });
    test('with mode class', () => {
        expect(
            classNames('someClass', {
                hovered: true,
                selected: false,
                bubble: undefined,
            }),
        ).toBe('someClass hovered');
    });
});
