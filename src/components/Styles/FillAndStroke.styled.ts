import { css } from 'styled-components';
import { defaultTheme } from '../../theme';
import { getColor } from '../../theme/utils';
import { FillAndStrokeType } from '../../../types';

export const StyledFillAndStroke = css<FillAndStrokeType>`
  ${({
    fill,
    fillVarient,
    fillOpacity,
    stroke,
    strokeVarient,
    strokeOpacity,
    fillRule,
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap,
    strokeLinejoin,
    strokeMiterlimit,
    strokeWidth,
  }) => css`
    fill: ${getColor(fill, fillVarient)};
    fill-opacity: ${fillOpacity && defaultTheme.opacity[fillOpacity]};
    fill-rule: ${fillRule};
    stroke: ${getColor(stroke, strokeVarient)};
    stroke-dasharray: ${strokeDasharray};
    stroke-dashoffset: ${strokeDashoffset};
    stroke-linecap: ${strokeLinecap};
    stroke-linejoin: ${strokeLinejoin};
    stroke-miterlimit: ${strokeMiterlimit};
    stroke-opacity: ${strokeOpacity && defaultTheme.opacity[strokeOpacity]};
    stroke-width: ${strokeWidth};
  `}
`;
