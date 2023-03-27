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

function ReservTrainer({ trainer, handleTrainer }) {
  return (
    <TrainerBox>
      <ShopTrainer trainer={trainer} />
      <input
        type="checkbox"
        className="check"
        onClick={() => handleTrainer(trainer)}
        value={trainer.trainerIdx}
      />
    </TrainerBox>
  )
}

export default ReservTrainer;