import { css } from 'styled-components';
import { defaultTheme } from '../../theme';
import { getColor } from '../../theme/utils';
import { FillAndStrokeType } from '../../../types';

export const StyledFillAndStroke = css<FillAndStrokeType>`
  fill: ${({ fill, fillVarient }) => getColor(fill, fillVarient)};
  fill-opacity: ${({ fillOpacity }) =>
    fillOpacity ? defaultTheme.opacity[fillOpacity] : undefined};
  fill-rule: ${({ fillRule }) => fillRule};
  stroke: ${({ stroke, strokeVarient }) => getColor(stroke, strokeVarient)};
  stroke-dasharray: ${({ strokeDasharray }) => strokeDasharray};
  stroke-dashoffset: ${({ strokeDashoffset }) => strokeDashoffset};
  stroke-linecap: ${({ strokeLinecap }) => strokeLinecap};
  stroke-linejoin: ${({ strokeLinejoin }) => strokeLinejoin};
  stroke-miterlimit: ${({ strokeMiterlimit }) => strokeMiterlimit};
  stroke-opacity: ${({ strokeOpacity }) =>
    strokeOpacity ? defaultTheme.opacity[strokeOpacity] : undefined};
  stroke-width: ${({ strokeWidth }) => strokeWidth};
`;
