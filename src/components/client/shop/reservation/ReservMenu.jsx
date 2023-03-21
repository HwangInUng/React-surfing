import { useState } from "react";
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

function ReservMenu() {
  const [count, setCount] = useState(0);
  return (
    <MenuBox>
      <div className="menu-box">
        <ShopMenu />
      </div>
      <div className="count-box flex">
        <button onClick={count > 0 ? () => setCount((current) => current - 1) : null}>-</button>
        <input type="text" value={count} readOnly />
        <button onClick={() => setCount((current) => current + 1)} id="plus">+</button>
      </div>
    </MenuBox>
  )
}

export default ReservMenu;