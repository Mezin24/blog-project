import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    const expected = 'testClass';
    expect(classNames('testClass')).toBe(expected);
  });

  test('with first class and additional', () => {
    const expected = 'testClass class1 class2';
    expect(classNames('testClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'testClass class1 class2 hovered clecked';
    expect(
      classNames('testClass', { hovered: true, clecked: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('with false mods', () => {
    const expected = 'testClass class1 class2 clecked';
    expect(
      classNames('testClass', { hovered: false, clecked: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('with undefined mods', () => {
    const expected = 'testClass class1 class2 clecked';
    expect(
      classNames('testClass', { hovered: undefined, clecked: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });
});
