import React from 'react';
import Title from './../../components/Title';
import Monitor from './../../components/Monitor';
import CalendarGrid from './../../components/CalendarGrid';
import style from './Calendar.module.css';
import { useCalendar } from './useCalendar';
import { useNavigate } from 'react-router-dom';

const Calendar = ({
  locale = 'default',
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2,
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber,
  });
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('userName');
  React.useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  });
  return (
    <div className={style.shadowWrapper}>
      <Title />
      <Monitor state={state} functions={functions} />
      <CalendarGrid startDay={state.calendarDays} dayOfWeek={state.weekDaysNames} />
    </div>
  );
};

export default Calendar;
