import React, { FC } from 'react';
import { Container, Label, Typography } from '../..';
import { usePhoneInput } from '../../../hooks';
import { PhoneInputFieldProps } from '../FormFields.types';
import {
  StyledFieldset,
  StyledInput,
  StyledInputContainer,
  StyledLegend,
} from '../InputContainer.styled';
import { SingleSelectFieldChildren } from '../SelectField/SingleSelectFieldChildren';
import Earth from '../../../icons/Earth';
import { getBorderRadius } from '../../../theme/utils';

export const PhoneInputField: FC<PhoneInputFieldProps> = ({
  name,
  label,
  varient,
  isError,
  errorMessage,
  onChange,
  validate = true,
  ...props
}) => {
  const {
    countryMenuRef,
    openMenu,
    countryList,
    countryFieldValue,
    handelSetCountryFieldValue,
    openCountryMenu,
    foucusCountryMenu,
    optionsContainerWidth,
    checkPhoneNumber,
    setCountryFieldValue,
    countryInputValue,
    setCountryInputValue,
    isFieldError,
    setIsFieldError,
  } = usePhoneInput();

  return (
    <>
      {varient === 'outlined' ? (
        <StyledFieldset varient={varient} isError={isError || isFieldError}>
          <StyledInput
            type="text"
            name={name}
            id={name}
            placeholder={label}
            style={{ transform: 'translate(6rem, -0.20rem)' }}
            onChange={e => {
              if (validate) {
                checkPhoneNumber(`${countryFieldValue.value}${e.target.value}`)
                  ? onChange(`${countryFieldValue.value}${e.target.value}`)
                  : null;
              } else {
                onChange(`${countryFieldValue.value}${e.target.value}`);
              }
              setIsFieldError(
                !checkPhoneNumber(`${countryFieldValue.value}${e.target.value}`)
              );
            }}
            {...props}
          />
          <Container
            position="absolute"
            left="0rem"
            top="50%"
            width="8rem"
            transform="translateY(-50%)"
            ref={countryMenuRef}
            style={{ cursor: 'pointer' }}
            onClick={openMenu}
          >
            <SingleSelectFieldChildren
              optionsContainerWidth={optionsContainerWidth}
              options={countryList}
              fieldValue={countryFieldValue}
              setFieldValue={handelSetCountryFieldValue}
              open={openCountryMenu}
              focus={foucusCountryMenu}
              isError={isError || isFieldError}
              varient={varient}
              maxHeight="15rem"
              optionFontSize="0.8rem"
              renderValue={
                <Container>
                  {countryFieldValue.extraArgs &&
                  countryFieldValue.id !== 'none' ? (
                    <img
                      width={30}
                      src={
                        countryFieldValue.extraArgs
                          ? countryFieldValue.extraArgs['flag']
                          : undefined
                      }
                      alt={String(countryFieldValue.id)}
                      style={{ transform: 'translateY(-30%)' }}
                    />
                  ) : (
                    <Earth style={{ transform: 'translateY(-30%)' }} />
                  )}
                  <input
                    value={countryInputValue}
                    placeholder="--"
                    onChange={e => setCountryInputValue(e.target.value)}
                    onBlur={e => {
                      countryList.filter(c => c.value === e.target.value)[0]
                        ? setCountryFieldValue(
                            countryList.filter(
                              c => c.value === e.target.value
                            )[0]
                          )
                        : setCountryFieldValue({
                            id: 'none',
                            value: '',
                          });
                    }}
                    style={{
                      margin: '0.1rem 0.5rem',
                      transform: 'translateY(-30%)',
                      width: '2.5rem',
                    }}
                  />
                </Container>
              }
            />
            <Typography
              className="error-message"
              children={errorMessage && errorMessage ? errorMessage : undefined}
              style={{ opacity: isError && errorMessage ? 1 : 0 }}
            />
          </Container>
          <StyledLegend disableFloat className="legend">
            {label}
          </StyledLegend>
          <StyledLegend
            disableFloat
            className="float-legend"
            isError={isError}
            children={label}
          />
          <Typography
            className="error-message"
            children={errorMessage && errorMessage ? errorMessage : undefined}
            style={{ opacity: isError && errorMessage ? 1 : 0 }}
          />
        </StyledFieldset>
      ) : (
        <StyledInputContainer
          flowType="flex"
          elementType="container"
          flexDirection="column"
          justifyContent="end"
          varient={varient}
          isError={isError}
        >
          <StyledInput
            type="text"
            name={name}
            id={name}
            placeholder={label}
            {...props}
          />
          <Label className="float-label" htmlFor={name} children={label} />
          <Typography
            className="error-message"
            children={errorMessage && errorMessage ? errorMessage : undefined}
            style={{ opacity: isError && errorMessage ? 1 : 0 }}
          />
        </StyledInputContainer>
      )}
    </>
  );
};
