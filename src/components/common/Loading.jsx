import { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const LoadingImg = styled.img`
  width: 300px;
  height: 300px;
  opacity: ${props => props.opacity};
`;

function Loading({ open }) {
  const [opacity, setOpacity] = useState(0);
  const handleOpacity = () => {
    setOpacity((current) => current + 0.05);
    if(opacity > 1){
      setOpacity(0);
    }
  }
  useEffect(() => {
    setTimeout(() => handleOpacity(), 50);
  }, [opacity]);
  return <Modal
    isOpen={open}
    appElement={document.getElementById('root')}
    style={{
      overlay: {
        boxShadow: "0px 0px 3px 0px #7ca2eb",
        padding: 10,
        position: 'fixed',
        width: "100%",
        height: "100vh",
        top: 70,
        left: 0,
        backgroundColor: "white"
      },
      content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }
    }}
  >
    <LoadingImg src="./img/loading.png" alt="..." opacity={opacity}/>
  </Modal>
}

export default Loading;