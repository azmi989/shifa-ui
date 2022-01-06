import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import DropDown from '../../../icons/DropDown';
import { Container, Divider, Typography } from '../..';
import { SelectOptionType } from '../FormFields.types';
import { StyledOption } from './Option.styled';
import { getColor } from '../../../theme/utils';

type Props = {
  options?: SelectOptionType[];
  fieldValue: SelectOptionType;
  setFieldValue: Dispatch<SetStateAction<SelectOptionType>>;
  open: boolean;
  focus: boolean;
  isError?: boolean;
  varient?: 'filled' | 'outlined' | 'standard';
  optionFontSize?: string | number;
  renderValue?: ReactNode;
  optionsContainerWidth?: string | number;
  maxHeight?: string | number;
};

export const SingleSelectFieldChildren = ({
  options,
  fieldValue,
  setFieldValue,
  open,
  focus,
  isError,
  varient,
  optionFontSize = '1rem',
  renderValue,
  optionsContainerWidth,
  maxHeight = '10rem',
}: Props) => {
  return (
    <>
      <DropDown
        style={{
          transition: 'transform 100ms ease',
          transform: open ? 'rotate(180deg) scale(2)' : 'scale(2)',
          position: 'absolute',
          right: '1rem',
          fill: getColor(isError ? 'error' : focus ? 'primary' : 'primary'),
          top: '35%',
        }}
      />
      <Typography
        style={{
          position: 'absolute',
          top: varient === 'outlined' ? '30%' : '50%',
          left: '1rem',
        }}
      >
        {renderValue ? renderValue : fieldValue.value}
      </Typography>
      <Container
        flowType="flex"
        elementType="container"
        flexDirection="column"
        position="absolute"
        height="fit-content"
        top="110%"
        left={0}
        padding="1rem"
        transform={open ? 'scale(1,1)' : 'scale(1,0)'}
        transition="transform 100ms ease"
        transformOrigin="top center"
        backgroundColor="paper"
        borderRadius="s"
        cursor="default"
        elevation={1}
        maxHeight={maxHeight}
        overflowY="scroll"
        width={optionsContainerWidth}
        zIndex={10}
        style={{ scrollBehavior: 'smooth' }}
      >
        {options?.map((option, index) => (
          <>
            {index === 0 ? (
              undefined
            ) : (
              <Divider
                key={`${option.id}-div`}
                borderWidth="xxs"
                borderOpacity="50%"
              />
            )}
            <StyledOption
              onClick={() => setFieldValue(option)}
              key={option.id}
              selected={fieldValue.id === option.id}
              style={{
                fontSize: optionFontSize,
              }}
            >
              {option.element ? option.element : option.value}
            </StyledOption>
          </>
        ))}
      </Container>
    </>
  );
};
