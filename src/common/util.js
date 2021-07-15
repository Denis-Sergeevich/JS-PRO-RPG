/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
export function clamp(x, fromX, toX) {
  if (x < fromX) x = fromX;
  if (x > toX) x = toX;

  return x;
}
