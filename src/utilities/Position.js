import {css} from "styled-components";

const absolute = ({x = 0, y = 0} = {}) => {
    return css`
      position: absolute;
      top: ${y};
      left: ${x};
    `;
}
const fixed = ({
       x = 0,
       y = 0,
       xProp = 'left',
       yProp = 'top'
   } = {}) => {
    return css`
      position: fixed;
      ${xProp}: ${y};
      ${yProp}: ${x};
    `;
}

export {
    fixed,
    absolute,
}