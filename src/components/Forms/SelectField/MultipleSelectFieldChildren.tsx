import React, { Dispatch, SetStateAction } from 'react';
import { Container, Divider, Typography } from '../..';
import Close from '../../../icons/Close';
import { SelectOptionType } from '../FormFields.types';
import { StyledOption } from './Option.styled';
type Props = {
  options?: SelectOptionType[];
  defaultValue: string;
  fieldValue: SelectOptionType[];
  setFieldValue: Dispatch<SetStateAction<SelectOptionType[]>>;
  open: boolean;
  varient?: 'filled' | 'outlined' | 'standard';
};

export const MultipleSelectFieldChildren = ({
  options,
  defaultValue,
  fieldValue,
  setFieldValue,
  open,
  varient,
}: Props) => {
  return (
    <>
      {fieldValue.length > 0 ? (
        <Container
          position="absolute"
          top="-5%"
          flowType="flex"
          elementType="container"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          width="80%"
          overflow="hidden"
          padding="0.1rem 0"
          zIndex={10}
        >
          {fieldValue.map(item => (
            <Container
              width="fit-content"
              height="fit-content"
              margin="0 0.5rem"
              padding="0.25rem 1rem"
              key={`${item.id}-cont`}
              backgroundColor="paper"
              backgroundColorOpacity="20%"
              elevation={2}
              borderRadius="md"
              borderWidth="xxs"
              zIndex={10}
              onClick={e => {
                e.stopPropagation();
                setFieldValue(prev =>
                  prev.filter(option => option.id !== item.id)
                );
              }}
            >
              {item.value}
              <Close style={{ marginLeft: '0.5rem' }} />
            </Container>
          ))}
        </Container>
      ) : (
        <Typography
          style={{
            position: 'absolute',
            top: varient === 'outlined' ? '30%' : '50%',
            left: '1rem',
          }}
        >
          {defaultValue}
        </Typography>
      )}
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
              onClick={() => {
                fieldValue.includes(option)
                  ? setFieldValue(prev =>
                      prev.filter(item => item.id !== option.id)
                    )
                  : setFieldValue(prev => [...prev, option]);
              }}
              padding="0.5rem 0"
              key={option.id}
              selected={fieldValue.includes(option)}
            >
              {option.element ? option.element : option.value}
            </StyledOption>
          </>
        ))}
      </Container>
    </>
  );
};

export default MultipleSelectFieldChildren;
