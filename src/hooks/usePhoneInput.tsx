import React, { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { Typography } from '..';
import { SelectOptionType } from '../components/Forms/FormFields.types';
import { generateUID } from '../utils';
import { countriesList } from './countriesList';
import { CountryCode, isValidPhoneNumber } from 'libphonenumber-js';

export const usePhoneInput = () => {
  const [openCountryMenu, setOpenCountryMenu] = useState(false);
  const [foucusCountryMenu, setFoucusCountryMenu] = useState(false);
  const [isFieldError, setIsFieldError] = useState(false);
  const [optionsContainerWidth, setOptionsContainerWidth] = useState<number>();
  const [countryFieldValue, setCountryFieldValue] = useState<SelectOptionType>({
    id: 'none',
    value: '',
  });
  const [countryInputValue, setCountryInputValue] = useState(
    countryFieldValue.value
  );
  const countryMenuRef = useRef<HTMLDivElement>(null);
  const openMenu = () => {
    setFoucusCountryMenu(true);
    setOpenCountryMenu(true);
  };
  const closeMenu = () => {
    setFoucusCountryMenu(false);
    setOpenCountryMenu(false);
  };
  useOnClickOutside(countryMenuRef, closeMenu);
  const countryList: SelectOptionType[] = countriesList?.map(country => ({
    id: country.cca2 || generateUID(),
    value: country.idd || '',
    extraArgs: { flag: country.flag },
    element: (
      <>
        <Typography
          fontSize="0.8rem"
          style={{ margin: '1rem 0 0.25rem 0' }}
          children={`${country.name} (${country.idd})`}
        />
      </>
    ),
  }));
  useEffect(() => {
    closeMenu();
    setCountryInputValue(countryFieldValue.value);
  }, [countryFieldValue]);
  const handelSetCountryFieldValue = (value: any) =>
    setCountryFieldValue(value);

  useEffect(() => {
    let widths: number[] = [];
    const menuChildren = countryMenuRef.current?.childNodes[2]
      .childNodes as NodeListOf<HTMLDivElement | HTMLHRElement>;
    menuChildren.forEach(child =>
      widths.push(((child.textContent?.length || 0) * 10) / 16)
    );
    setOptionsContainerWidth(Math.max(...widths));
  }, [countryMenuRef]);
  const checkPhoneNumber = (phone: string) =>
    isValidPhoneNumber(
      phone,
      String(countryFieldValue.id).toUpperCase() as CountryCode
    );
  return {
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
  };
};
