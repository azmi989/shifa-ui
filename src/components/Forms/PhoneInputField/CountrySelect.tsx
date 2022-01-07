import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { CountryProps } from '.';
import DropDown from '../../../icons/DropDown';
import { StyledSelect } from '../SelectField/Select.styled';
import { countriesList } from './countriesList';

export const CountrySelect = ({
  varient,
  selectedCountry,
  setSelectedCountry,
  isError,
}: {
  varient?: 'filled' | 'outlined' | 'standard';
  selectedCountry: Partial<CountryProps>;
  setSelectedCountry: Dispatch<SetStateAction<CountryProps>>;
  isError: boolean;
}) => {
  const ref = useRef<HTMLSelectElement>(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <>
      {selectedCountry.cca2 === 'none' ? null : (
        <img
          width={32}
          style={{
            position: 'absolute',
            left: '3.4rem',
            top: varient === 'outlined' ? '15%' : '40%',
          }}
          src={selectedCountry.flag}
          alt={selectedCountry.name}
        />
      )}
      <StyledSelect
        style={{ width: '7rem' }}
        varient={varient}
        name="countries"
        open={open}
        onClick={() => setOpen(!open)}
        isError={isError}
        ref={ref}
      >
        {countriesList.map(country => (
          <option
            onClick={() => setSelectedCountry(country)}
            key={country.cca2}
            value={country.idd}
          >
            {country.idd}
          </option>
        ))}
      </StyledSelect>

      <DropDown
        className="arrow"
        style={{
          position: 'absolute',
          top: varient === 'outlined' ? '25%' : '40%',
          left: '6rem',
        }}
      />
    </>
  );
};
