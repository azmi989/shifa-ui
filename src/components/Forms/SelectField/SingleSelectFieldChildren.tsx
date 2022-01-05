import React, { Dispatch, SetStateAction } from 'react';
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
};

export const SingleSelectFieldChildren = ({
  options,
  fieldValue,
  setFieldValue,
  open,
  focus,
  isError,
  varient,
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
          top: '25%',
        }}
      />
      <Typography
        style={{
          position: 'absolute',
          top: varient === 'outlined' ? '30%' : '50%',
          left: '1rem',
        }}
      >
        {fieldValue.value}
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
        maxHeight="10rem"
        overflowY="scroll"
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
              cursor="pointer"
              onClick={() => setFieldValue(option)}
              padding="0.5rem 0"
              key={option.id}
              selected={fieldValue.id === option.id}
            >
              {option.element ? option.element : option.value}
            </StyledOption>
          </>
        ))}
      </Container>
    </>
  );
};
