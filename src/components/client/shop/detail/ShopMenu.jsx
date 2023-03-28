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

function ShopMenu({ menu }) {
  return (
    <MenuBox>
      <div className="info-box">
        <img
          src={`${process.env.REACT_APP_IMG_URL}/resources/data/${menu.menuImage}`}
          alt=".."
          className="menu-img"
        />
        <div>
          <div>
            <label className="name">{menu.menuName}</label>
          </div>
          <div>
            <label className="menu-info">{menu.menuDesc}</label>
          </div>
        </div>
      </div>
      <div className="price-box">
        <label className="name">{menu.menuPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</label>
      </div>
    </MenuBox>
  )
}

export default ShopMenu;