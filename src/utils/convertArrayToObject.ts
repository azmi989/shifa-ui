export const convertArrayToObject = (
  array: string[] | number[],
  key?: string | number
): Record<string, string | number> => {
  const initialValue: Record<string, string | number> = {};
  if (key)
    array.forEach((item, index) => (initialValue[`${key}-${index}`] = item));
  else array.forEach((item, index) => (initialValue[index] = item));
  return initialValue;
};
