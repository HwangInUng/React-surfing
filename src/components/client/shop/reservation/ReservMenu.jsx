import { useEffect, useState } from "react";
import styled from "styled-components";
import ShopMenu from "../detail/ShopMenu";

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .menu-box{
    width: 70%;
  }
  .count-box{
    width: 20%;

    > input{
      font-size: 1.1rem;
      text-align: center;
      width: 40px;
      height: 30px;
    }
    > button{
      font-weight: bold;
      padding: 5px;
      border-radius: 10px;
      border: 1px solid #7ca2eb;
      background: white;
      color: #7ca2eb;
    }
  }
`;

function ReservMenu({ menu, handleMenu, handleAmonut }) {
  //선택한 상품의 수
  const [count, setCount] = useState(0);

  //각 메뉴별 count가 1이되는 시점에 한번만 rsvName에 메뉴명 추가
  const handlePrice = (plus) => {
    if (plus) {
      setCount((current) => current + 1);
      handleAmonut(plus, menu.menuPrice);
    } else {
      setCount((current) => current - 1);
      handleAmonut(plus, menu.menuPrice);
    }
  }
  
  useEffect(() => {
    handleMenu(menu.menuName, count);
  }, [count]);

  return (
    <MenuBox>
      <div className="menu-box">
        <ShopMenu menu={menu} />
      </div>
      <div className="count-box flex">
        <button onClick={count > 0 ? () => handlePrice(false) : null}>-</button>
        <input type="text" value={count} readOnly />
        <button onClick={() => handlePrice(true)}>+</button>
      </div>
    </MenuBox>
  )
}

export default ReservMenu;