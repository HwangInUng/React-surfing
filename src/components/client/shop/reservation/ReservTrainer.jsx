import styled from "styled-components";
import ShopTrainer from "../detail/ShopTrainer";

const TrainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .check{
    width: 20px;
    height: 20px;
  }
`;

function ReservTrainer() {
  return (
    <TrainerBox>
      <ShopTrainer />
      <input type="checkbox" className="check" />
    </TrainerBox>
  )
}

export default ReservTrainer;