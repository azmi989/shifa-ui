import { css } from 'styled-components';
import { ElevationProp } from '../../theme/theme.types';
import { defaultTheme } from '../../theme';

export const StyledElevation = css<ElevationProp>`
  box-shadow: ${({ elevation }) =>
    elevation && defaultTheme.elevation[elevation]};
`;
