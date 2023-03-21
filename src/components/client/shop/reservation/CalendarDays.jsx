import styled from "styled-components";

const DaysContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #7e8080;
  padding: 0px 5px;
  
  .box{
    width: 14%;
  }
  .day{
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
  }
`;

function CalendarDays() {
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  return (
    <DaysContainer>
      {days && days.map((day, index) => {
        return (
          <div key={index} className="box">
            <label className="day">{day}</label>
          </div>
        )
      })}
    </DaysContainer>
  )
}

export default CalendarDays;