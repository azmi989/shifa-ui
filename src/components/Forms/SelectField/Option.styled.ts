import styled from 'styled-components';
import { Container } from '../..';
import { getColor } from '../../../theme/utils';
import { ContainerProps } from '../../Container/Container.types';
type Props = { selected: boolean } & ContainerProps;
export const StyledOption = styled(Container)<Props>`
  background-color: ${({ selected }) =>
    selected ? getColor('paper', 300, '30%') : undefined};
  &:hover {
    background-color: ${getColor('paper', 300, '30%')};
  }
`;
