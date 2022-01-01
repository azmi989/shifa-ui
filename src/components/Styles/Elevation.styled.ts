import { css } from 'styled-components';
import { ElevationProp } from '../../theme/theme.types';
import { defaultTheme } from '../../theme';

export const StyledElevation = css<ElevationProp>`
  box-shadow: ${props =>
    props.elevation ? defaultTheme.elevation[props.elevation] : undefined};
`;
