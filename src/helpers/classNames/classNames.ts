type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods,
  additional: string[]
): string =>
  [
    cls,
    Object.entries(mods)
      .filter(([_className, value]) => !!value)
      .map(([className, _value]) => className),
    ...additional,
  ].join(" ");
