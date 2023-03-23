import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Bt from "../../common/Bt";

const TrainerBox = styled.div`
  width: 100%;
  height: 70px;
  margin: 5px 0px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  
  .info-box{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .trainer-img{
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 10px;
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

function TrainerItem({ shopIdx }) {
  const [trainers, setTrainers] = useState([]);

  const getTrainers = () => {
    axios.get(`/api/trainer/${shopIdx}`)
      .then((res) => {
        setTrainers(res.data);
      })
  }

  const removeTrainer = (trainerIdx) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios.delete(`/api/trainer/${trainerIdx}`)
        .then((res) => {
          alert(res.data.msg);
          getTrainers();
        }).catch((err) => {
          alert(err.response.data.detail);
        })
    }
  }

  useEffect(() => {
    getTrainers();
  }, []);
  return (trainers && trainers.map((trainer, index) => {
    return (
      <TrainerBox key={index}>
        <div className="info-box">
          <img src={`http://localhost:7777/resources/data/${trainer.trainerImage}`} alt=".." className="trainer-img" />
          <div>
            <div>
              <label className="name">{trainer.trainerName}</label>
            </div>
            <div>
              <label className="trainer-info">
                {trainer.trainerCareer + '년 / ' + trainer.trainerType + ' - ' + trainer.trainerBoard}
              </label>
            </div>
          </div>
        </div>
        <div>
          <Bt
            btName="삭제"
            color="#f0a779"
            onClick={() => removeTrainer(trainer.trainerIdx)}
          />
        </div>
      </TrainerBox>
    )
  })
  )
}

export default TrainerItem;