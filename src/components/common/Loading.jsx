import { useEffect, useState } from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading-img{
    width: 400px;
    height: 400px;
    opacity: ${props => props.opacity};
  }
`;

function Loading() {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const handleOpacity = () => {
      setOpacity((current) => current + 0.05);
      if (opacity > 1) {
        setOpacity(0);
      }
    }
    setTimeout(() => handleOpacity(), 50);
  }, [opacity]);
  return (
    <LoadingContainer>
      <img
        className="loading-img"
        src="/img/loading.png"
        alt=".."
        opacity={opacity}
      />
    </LoadingContainer>
  )
}

export default Loading;