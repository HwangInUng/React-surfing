import styled from "styled-components";

const DaysContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cecece;
  padding: 0px 5px;
  background: #f0a779;
  opacity: 0.6;
  
  .box{
    width: 14%;
    text-align: center;
  }
  .day{
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
  }
`;

function CalendarDays() {
  const days = ['Sun', 'Mon', 'Tus', 'Wed', 'Thr', 'Fri', 'Sat'];

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