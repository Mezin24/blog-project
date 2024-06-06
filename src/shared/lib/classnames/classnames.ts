type Mods = Record<string, string | boolean>;

export const classnames = (
  cls: string,
  mods: Mods,
  additional?: string[]
): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([classname, value]) => Boolean(value))
      .map(([classname, value]) => classname),
  ].join(' ');
};
