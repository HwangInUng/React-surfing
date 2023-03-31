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

function ReservTrainer({ trainer, handleTrainer, check }) {
  return (
    <TrainerBox>
      <ShopTrainer trainer={trainer} />
      <input
        type="checkbox"
        className="check"
        onChange={() => handleTrainer(trainer)}
        value={trainer.trainerIdx}
        checked={check === trainer.trainerIdx ? true : false}
      />
    </TrainerBox>
  )
}

export default ReservTrainer;