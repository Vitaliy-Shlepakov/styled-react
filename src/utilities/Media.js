import {css} from "styled-components";

const size = {
    $mobile: 768,
    $tablet: 992,
    $desktop: 1280,
}

const maxWidth = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media(max-width: ${size[label]}px) {
            ${css(...args)}
    `;
    return acc;
}, {});

export {
    maxWidth
}