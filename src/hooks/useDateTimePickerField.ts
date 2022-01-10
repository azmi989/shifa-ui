import {
  useState,
  useRef,
  useEffect,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';
import { useMediaQuery, useOnClickOutside } from 'usehooks-ts';
import { useModalPortalRef } from '.';
import { DateTimePickerType } from '../components/Forms/DateTimePickerField/DateTimePicker.types';
import { ModalBaseFunctionProps } from '../components/Modal/Modal.types';
import { defaultTheme } from '../theme';

type Props = { date: Date } & Pick<
  DateTimePickerType,
  'timeFormat' | 'onChange'
>;
type ReturnProps = {
  containerRef: RefObject<HTMLDivElement>;
  setContainerOpen: Dispatch<SetStateAction<boolean>>;
  modalRef: RefObject<ModalBaseFunctionProps>;
  containerOpen: boolean;
  isMobile: boolean;
  hours: number;
  setHours: Dispatch<SetStateAction<number>>;
  minutes: number;
  setMinutes: Dispatch<SetStateAction<number>>;
  meridiem: 'am' | 'pm';
  setMeridiem: Dispatch<SetStateAction<'am' | 'pm'>>;
  currentCalendarTab: number;
  setCurrentCalendarTab: Dispatch<SetStateAction<number>>;
  pick: 'hours' | 'minutes';
  setPick: Dispatch<SetStateAction<'hours' | 'minutes'>>;
  pickerCurrentTab: number;
  setPickerCurrentTab: Dispatch<SetStateAction<number>>;
  matchesScreen: boolean;
  onChange: (date: Date) => void;
};

export const useDateTimePickerField = ({
  timeFormat = '12',
  onChange,
  date,
}: Props): ReturnProps => {
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
    //@ts-ignore
    `(max-width: ${defaultTheme.screens[defaultTheme.themeResponsiveScreen]})`
  );
  useEffect(() => {
    setIsMobile(matchesScreen);
  }, [matchesScreen]);
  useOnClickOutside(containerRef, () => {
    setContainerOpen(false);
  });
  return {
    containerOpen,
    containerRef,
    modalRef,
    setContainerOpen,
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
    matchesScreen,
    onChange,
  };
};
