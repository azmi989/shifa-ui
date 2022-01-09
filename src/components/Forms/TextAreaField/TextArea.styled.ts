import styled from 'styled-components';
import { TextAreaFieldProps } from '../FormFields.types';

export const StyledTextArea = styled.textarea<TextAreaFieldProps>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : undefined)};
  height: 10rem;
  width: 100%;
  padding: 0 0.5rem;
  white-space: break-spaces;
  &::placeholder {
    color: transparent;
  }
  &:focus + .float-label,
  &:not(:placeholder-shown) + .float-label {
    transform: translate(-0rem, -1.3rem) scale(0.8);
  }
`;
