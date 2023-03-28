import styled from "styled-components";

const TrainerBox = styled.div`
  width: 50%;
  height: 70px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .profile-img{
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 50%;
  }
  .name{
    font-size: 1.4rem;
    font-weight: 500;
  }
  .trainer-info{
    font-size: 1.1rem;
    color: #7e8080;
  }
`;

function ShopTrainer({ trainer }) {
  return (
    <TrainerBox>
      <img
        src={`${process.env.REACT_APP_IMG_URL}/resources/data/${trainer.trainerImage}`}
        alt=".."
        className="profile-img"
      />
      <div>
        <div>
          <label className="name">{trainer.trainerName}</label>
        </div>
        <div>
          <label className="trainer-info">
            {trainer.trainerType + " - " + trainer.trainerBoard + "전문 / "}
            {"경력 " + trainer.trainerCareer}
          </label>
        </div>
      </div>
    </TrainerBox>
  )
}

export default ShopTrainer;