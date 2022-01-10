import React, { Dispatch, SetStateAction, useContext } from 'react';
import { usePickerInput } from '../../../hooks';
import { DateTimePickerContex } from './DateTimePickerContex';
import { IconButton } from '../../';
import { StyledInput } from '../InputContainer.styled';
import { StyledLabel } from '../../Typography/Label.styled';
import DateIcon from '../../../icons/DateIcon';
import Clock from '../../../icons/Clock';

type Props = {
  setContainerOpen: Dispatch<SetStateAction<boolean>>;
};

export const PickerInput = ({ setContainerOpen }: Props) => {
  const { dateInputValue, onBlur, onChange } = usePickerInput();
  const {
    label,
    name,
    type,
    isMobile,
    isError,
    modalRef,
    containerOpen,
  } = useContext(DateTimePickerContex);
  return (
    <>
      <StyledInput
        type="text"
        value={dateInputValue}
        onChange={onChange}
        onBlur={onBlur}
        style={{ padding: '0rem' }}
        id={name}
        placeholder={label}
      />
      <IconButton
        varient="contained"
        elevation="none"
        size="md"
        icon={
          type === 'date' ? (
            <DateIcon />
          ) : type === 'time' ? (
            <Clock />
          ) : (
            <DateIcon />
          )
        }
        onClick={() =>
          isMobile
            ? modalRef.current?.openModal()
            : !containerOpen
            ? setContainerOpen(true)
            : undefined
        }
      />
      <StyledLabel
        style={{ transform: 'translate(0,-1.2rem) scale(0.8)' }}
        htmlFor={name}
        className="float-label"
        textColor={isError ? 'error' : 'mainTextColor'}
      >
        {label}
      </StyledLabel>
    </>
  );
};
