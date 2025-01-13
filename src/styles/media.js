import { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 769,
  phone: 430,
};

const comparatorArray = Object.keys(sizes).sort((first, second) => {
  if (sizes[first] < sizes[second]) {
    return -1;
  } else if (sizes[first] > sizes[second]) {
    return 1;
  } else {
    return 0;
  }
});

const comparatorFunction = (first, second) => {
  let equals = false;
  for (const label of comparatorArray) {
    if (first[label] && second[label]) {
      equals = true;
      break;
    } else if (first[label] !== second[label]) {
      break;
    }
  }
  return equals;
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${(sizes[label] / 16).toFixed(2)}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const inlineMedia =
  (breakpoint) =>
  (...styles) => {
    return css`
      @media (min-width: ${(breakpoint / 16).toFixed(2)}em) {
        ${css(...styles)};
      }
    `;
  };

const mediaType = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = window.matchMedia(`(max-width: ${sizes[label]}px)`).matches;
  return acc;
}, {});

const getMediaType = () => {
  return Object.keys(sizes).reduce((acc, label) => {
    acc[label] = window.matchMedia(`(max-width: ${sizes[label]}px)`).matches;
    return acc;
  }, {});
};

export { comparatorFunction, media, inlineMedia, mediaType, getMediaType };
