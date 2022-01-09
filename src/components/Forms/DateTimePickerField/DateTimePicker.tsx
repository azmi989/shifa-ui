import React, { FC, useEffect, useRef, useState } from 'react'
import useTaqweem from 'react-taqweem'
import { useMediaQuery, useOnClickOutside } from 'usehooks-ts'
import { Modal, Container } from '../..'
import { defaultTheme } from '../../../theme'
import { StyledInputContainer } from '../InputContainer.styled'
import { DateTimePickerType } from './DateTimePicker.types'
import DateTimePickerContexProvider from './DateTimePickerContex'

export const DateTimePicker = ({
  initialDate,
  timeFormat = '12',
  lang = 'default',
  dateFormat = 'none',
  type = 'date-time',
  varient = 'outlined',
  label,
  name,
  isError,
  onChange
}:DateTimePickerType) => {
  const { date, ...taqweem } = useTaqweem({
    dateArg: initialDate,
    langArg: lang,
    dateFormatArg: dateFormat,
    timeFormatArg: timeFormat
  })
  const [containerOpen, setContainerOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hours, setHours] = useState(
    timeFormat === '12' && date.getHours() > 12
      ? date.getHours() - 12
      : date.getHours()
  )
  const [minutes, setMinutes] = useState(date.getMinutes())
  const [meridiem, setMeridiem] = useState<'am' | 'pm'>(
    timeFormat === '12' && date.getHours() >= 12 ? 'pm' : 'am'
  )

  const [currentCalendarTab, setCurrentCalendarTab] = useState(1)
  const [pick, setPick] = useState<'hours' | 'minutes'>('hours')
  const [pickerCurrentTab, setPickerCurrentTab] = useState(1)
  const containerRef = useRef(null)

  const matchesScreen = useMediaQuery(
    `(max-width: ${defaultTheme.themeResponsiveScreen})`
  )
  useEffect(() => {
    setIsMobile(matchesScreen)
  }, [matchesScreen])
  useEffect(() => {
    onChange(date)
  }, [date])
  useOnClickOutside(containerRef, () => {
    setContainerOpen(false)
  })
  return (
    <DateTimePickerContexProvider
      {...taqweem}
      date={date}
      initialDate={initialDate}
      timeFormat={timeFormat}
      dateFormat={dateFormat}
      lang={lang}
      name={name}
      label={label}
      isError={isError}
      type={type}
      inputVarient={varient}
      isMobile={isMobile}
      containerOpen={containerOpen}
      pickerCurrentTab={pickerCurrentTab}
      setPickerCurrentTab={setPickerCurrentTab}
      hours={hours}
      setHours={setHours}
      minutes={minutes}
      setMinutes={setMinutes}
      meridiem={meridiem}
      setMeridiem={setMeridiem}
      pick={pick}
      setPick={setPick}
      currentCalendarTab={currentCalendarTab}
      setCurrentCalendarTab={setCurrentCalendarTab}
    >
      <StyledInputContainer
        disableGutter
        varient={varient || 'standard'}
        marginTop='0.5rem'
            marginBottom ='2rem'
        paddingTop='0.5rem'
            paddingBottom ='2rem'
          position= 'relative'
          justifyContent ='center'
          alignItems= 'end'
        }}
          height='3.2rem'
        isError={isError}
      >
        {/* <PickerInput
          setContainerOpen={setContainerOpen}
          setModalOpen={setModalOpen}
        /> */}
        {isMobile ? (
          <Modal
            isCloseOnClickOutside
            container={{
              flowType:"flex",
              elementType:'container',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <PickerComponent />
          </Modal>
        ) : (
          <Container
            background={{ color: { color: 'paper' } }}
            border={{ borderAll: { radius: 's' } }}
            elevation={2}
            inset={{ position: 'absolute', top: '120%' }}
            flex={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              rowGap: '1rem'
            }}
            transition='transform 100ms ease-in-out'
            transformOrigin='center top'
            transform={containerOpen ? 'scale(1,1)' : 'scale(1,0)'}
            ref={containerRef}
            zIndex='max'
            style={{ overflow: 'hidden' }}
          >
            <PickerComponent />
          </Container>
        )}
      </StyledInputContainer>
    </DateTimePickerContexProvider>
  )
}
