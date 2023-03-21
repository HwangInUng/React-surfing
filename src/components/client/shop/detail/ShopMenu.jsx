import styled from "styled-components";

const MenuBox = styled.div`
  width: 100%;
  height: 70px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .info-box{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .price-box{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .menu-img{
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 10px;
  }
  .name{
    font-size: 1.4rem;
    font-weight: 500;
  }
  .menu-info{
    font-size: 1.1rem;
    color: #7e8080;
  }
`;

function MenuTrainer() {
  return (
    <MenuBox>
      <div className="info-box">
        <img src="../../img/test.jpg" alt=".." className="menu-img" />
        <div>
          <div>
            <label className="name">메뉴명</label>
          </div>
          <div>
            <label className="menu-info">메뉴 설명에 대한 내용이 들어갈 영역</label>
          </div>
        </div>
      </div>
      <div className="price-box">
        <label className="name">35,000원</label>
      </div>
    </MenuBox>
  )
}

export default MenuTrainer;