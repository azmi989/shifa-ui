import {
  useState,
  useRef,
  useEffect,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';
import useTaqweem from 'react-taqweem';
import { useMediaQuery, useOnClickOutside } from 'usehooks-ts';
import { useModalPortalRef } from '.';
import {
  DateTimePickerContexProps,
  DateTimePickerType,
} from '../components/Forms/DateTimePickerField/DateTimePicker.types';
import { ModalBaseFunctionProps } from '../components/Modal/Modal.types';
import { defaultTheme } from '../theme';

type ReturnProps = {
  containerRef: RefObject<HTMLDivElement>;
  setContainerOpen: Dispatch<SetStateAction<boolean>>;
  modalRef: RefObject<ModalBaseFunctionProps>;
} & DateTimePickerContexProps;

export const useDateTimePickerField = ({
  initialDate,
  timeFormat = '12',
  lang = 'default',
  dateFormat = 'none',
  type = 'date-time',
  varient = 'outlined',
  label,
  name,
  isError,
  onChange,
}: DateTimePickerType): ReturnProps => {
  const { date, ...taqweem } = useTaqweem({
    dateArg: initialDate,
    langArg: lang,
    dateFormatArg: dateFormat,
    timeFormatArg: timeFormat,
  });
  const [containerOpen, setContainerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hours, setHours] = useState(
    timeFormat === '12' && date.getHours() > 12
      ? date.getHours() - 12
      : date.getHours()
  );
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [meridiem, setMeridiem] = useState<'am' | 'pm'>(
    timeFormat === '12' && date.getHours() >= 12 ? 'pm' : 'am'
  );

  const [currentCalendarTab, setCurrentCalendarTab] = useState(1);
  const [pick, setPick] = useState<'hours' | 'minutes'>('hours');
  const [pickerCurrentTab, setPickerCurrentTab] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const modalRef = useModalPortalRef();
  const matchesScreen = useMediaQuery(
    `(max-width: ${defaultTheme.themeResponsiveScreen})`
  );
  useEffect(() => {
    setIsMobile(matchesScreen);
  }, [matchesScreen]);
  useEffect(() => {
    onChange(date);
  }, [date]);
  useOnClickOutside(containerRef, () => {
    setContainerOpen(false);
  });
  return {
    date,
    containerOpen,
    isMobile,
    hours,
    setHours,
    minutes,
    setMinutes,
    meridiem,
    setMeridiem,
    currentCalendarTab,
    setCurrentCalendarTab,
    pick,
    setPick,
    pickerCurrentTab,
    setPickerCurrentTab,
    inputVarient: varient,
    label,
    name,
    initialDate,
    isError,
    type,
    containerRef,
    modalRef,
    setContainerOpen,
    ...taqweem,
  };
};
