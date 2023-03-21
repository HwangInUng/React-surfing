import { Icon } from "@iconify/react";
import { format } from "date-fns";
import styled from "styled-components";


const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #7e8080;
  padding: 5px;

  .title{
    font-size: 1.3rem;
    font-weight: 600;
    color: #7ca2eb;
  }
  .icon{
    width: 20px;
    height: 20px;
    margin: 0px 5px;
    cursor: pointer;
  }
`;

function CalendarHeader({ currentMonth, preMonth, nextMonth }) {
  return (
    <HeaderContainer>
      <div className="flex">
        <span className="title">
          {format(currentMonth, 'yyyy') + '년 ' + format(currentMonth, 'M') + '월'}
        </span>
      </div>
      <div>
        <Icon icon="bi:arrow-left-circle-fill" onClick={preMonth} className="icon" />
        <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} className="icon" />
      </div>
    </HeaderContainer>
  )
}

export default CalendarHeader;