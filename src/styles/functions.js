export const colorFetch =
  (color) =>
  ({ theme }) =>
    theme.colors[color];

export const borderRadiusFetch =
  (radius) =>
  ({ theme }) =>
    theme.borderRadius[radius];
