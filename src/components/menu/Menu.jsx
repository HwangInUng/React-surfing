import { Form } from "react-bootstrap";
import styled from "styled-components";

const MenuContainer = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  padding-top: 20px;
`;

function Menu(){
  return (
    <MenuContainer>
      <div style={{width:"50%", height: "50%"}}>hi</div>
    </MenuContainer>
  );
}

export default Menu;