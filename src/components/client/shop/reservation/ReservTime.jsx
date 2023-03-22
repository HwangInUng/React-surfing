import styled from "styled-components";

const TimeBox = styled.div`
  display: flex;
  margin: 10px 0px;
`;

const TimeBt = styled.button`
  font-size: 1.5rem;
  border: 1px solid #7ca2eb;
  border-radius: 20px;
  padding: 5px 20px;
  color: #7ca2eb;
  background: white;
  margin: 5px 5px 5px 0px;

  &.click{
    color: white;
    background: #7ca2eb;
  }
`;

function DetailCategory({ times, clicked, onClick }) {
  return (
    <TimeBox>
      {times && times.map((time, index) => {
        return (
          <TimeBt
            key={index}
            className={clicked === time ? "click" : null}
            value={time}
            onClick={onClick}
          >
            {time}:00
          </TimeBt>
        )
      })}
    </TimeBox>
  );
}

export default DetailCategory;