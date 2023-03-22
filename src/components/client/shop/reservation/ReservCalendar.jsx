import { addMonths, subMonths } from "date-fns";
import { useState } from "react";
import styled from "styled-components";
import CalendarCells from "./CalendarCells";
import CalendarDays from "./CalendarDays";
import CalendarHeader from "./CalendarHeader";

const CalendarBox = styled.div`
  width: 100%;
  margin: 10px 0px;
`;

function ReservCalendar({onDateClick, selectedDate}) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const preMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  }
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }
  return (
    <CalendarBox>
      <CalendarHeader
        currentMonth={currentMonth}
        preMonth={preMonth}
        nextMonth={nextMonth}
      />
      <CalendarDays />
      <CalendarCells
        currentMonth={currentMonth} 
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </CalendarBox>
  )
}

export default ReservCalendar;