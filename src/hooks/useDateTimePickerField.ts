import { useState, useRef, useEffect } from 'react';
import { useMediaQuery, useOnClickOutside } from 'usehooks-ts';
import { DateTimePickerProps } from '../components/Forms/DateTimePickerField/DateTimePicker.types';

import { defaultTheme } from '../theme';
import { useModalPortalRef } from './useModalPortal';

type Props = { date: Date } & Pick<
  DateTimePickerProps,
  | 'type'
  | 'varient'
  | 'label'
  | 'name'
  | 'isError'
  | 'disableFloat'
  | 'errorMessage'
  | 'forceFocus'
  | 'dateFormat'
  | 'lang'
  | 'onChange'
>;

export const useDateTimePickerField = ({ date, ...props }: Props) => {
  const [containerOpen, setContainerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentCalendarTab, setCurrentCalendarTab] = useState(1);
  const [pickerCurrentTab, setPickerCurrentTab] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useModalPortalRef();
  const matchesScreen = useMediaQuery(
    //@ts-ignore
    `(max-width: ${defaultTheme.screens[defaultTheme.themeResponsiveScreen]})`
  );
  useEffect(() => {
    setIsMobile(matchesScreen);
  }, [matchesScreen]);
  useOnClickOutside(containerRef, () => {
    setContainerOpen(false);
  });
  useEffect(() => {
    date && props.onChange(date);
  }, [date, props.onChange]);
  return {
    containerOpen,
    containerRef,
    modalRef,
    setContainerOpen,
    isMobile,
    currentCalendarTab,
    setCurrentCalendarTab,
    pickerCurrentTab,
    setPickerCurrentTab,
    matchesScreen,
    ...props,
  };
};
