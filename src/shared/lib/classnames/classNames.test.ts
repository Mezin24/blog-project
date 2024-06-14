import { classnames } from 'shared/lib/classnames/classnames';

describe('classnames', () => {
  test('with only first param', () => {
    const expected = 'testClass';
    expect(classnames('testClass')).toBe(expected);
  });

  test('with first class and additional', () => {
    const expected = 'testClass class1 class2';
    expect(classnames('testClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'testClass class1 class2 hovered clecked';
    expect(
      classnames('testClass', { hovered: true, clecked: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('with false mods', () => {
    const expected = 'testClass class1 class2 clecked';
    expect(
      classnames('testClass', { hovered: false, clecked: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('with undefined mods', () => {
    const expected = 'testClass class1 class2 clecked';
    expect(
      classnames('testClass', { hovered: undefined, clecked: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });
});
