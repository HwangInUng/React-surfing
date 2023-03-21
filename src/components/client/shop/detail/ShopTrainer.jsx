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

function ShopTrainer() {
  return (
    <TrainerBox>
      <img src="../../img/test.jpg" alt=".." className="profile-img" />
      <div>
        <div>
          <label className="name">강사명</label>
        </div>
        <div>
          <label className="trainer-info">롱보드-클래식  전문 / 경력 2년</label>
        </div>
      </div>
    </TrainerBox>
  )
}

export default ShopTrainer;