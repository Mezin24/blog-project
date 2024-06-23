export type Mods = Record<string, string | boolean>;

export const classnames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string =>
  [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([classname, value]) => Boolean(value))
      .map(([classname, value]) => classname),
  ].join(' ');
