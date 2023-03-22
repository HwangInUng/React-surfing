import { addDays, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, parseISO, startOfMonth, startOfWeek } from "date-fns";
import parse from "date-fns/parse";
import styled from "styled-components";

const CellContainer = styled.div`
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cell{
    width: 14%;
    text-align:center;
    font-weight: 600;
    font-size: 0.7rem;
    height: 70px;
    padding: 5px;
    border: 1px solid #cecece;
    border-radius: 10px;
    margin: 3px;
    cursor: pointer;
  }
  .valid{
    &:hover{
      transform: scale(1.1);
      border: none;
      background: #7ca2eb;
      color: white;
      opacity: 0.7;
    }
  }
  .not-valid{
    color: #cecece;
  }
  .selected{
    transform: scale(1.02);
    background: #7ca2eb;
    border: none;
    color: white;
    font-weight: 600;
  }
`;

function CalendarCells({ currentMonth, selectedDate, onDateClick }) {
  const monthStart = startOfMonth(currentMonth); //월의 시작일
  const monthEnd = endOfMonth(monthStart); //월의 마지막일
  const startDate = startOfWeek(monthStart); //주의 시작일
  const endDate = endOfWeek(monthEnd); //주의 마지막일

  const rows = []; //한 주를 표현할 행을 담을 배열
  let days = []; //한개의 주를 누적할 변수
  let day = startDate; //월의 시작일
  let formattedDate = '';

  //주의 시작일이 주의 마지막일까지 반복문 실행
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
      days.push(
        <div
          className={`cell ${!isSameMonth(day, monthStart) //같은 월이 아닌 경우 사용불가
              ? 'disabled'
              //같은 날짜 혹은 당일 날짜이면 선택상태로 유지
              : isSameDay(day, selectedDate) || isSameDay(day, new Date())
                ? 'selected'
                : format(currentMonth, 'M') !== format(day, 'M')
                  ? 'not-valid'
                  : 'valid'
            }`}
          key={day}
          //같은 월의 Cell만 클릭 가능
          onClick={isSameMonth(day, monthStart) ? () => onDateClick(cloneDay) : null}
        >
          <span
            className={format(currentMonth, 'M') !== format(day, 'M')
              ? 'not-valid'
              : ''}
          >
            {formattedDate}
          </span>
        </div>,
      );
      day = addDays(day, 1);
    }
    //내부 반복문이 종료되어 완성된 1개의 주를 추가
    rows.push(
      <div className="flex" key={day}>
        {days}
      </div>
    );
    days = []; //초기화
  }
  return <CellContainer>{rows}</CellContainer>
}

export default CalendarCells;