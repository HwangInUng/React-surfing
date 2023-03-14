import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 85%;
  align-items: center;
`;

function VerticalWrapper({children}){
  const scrollRef = useRef(null);
  // 드래그 가능여부를 판단할 state
  const [isDrag, setIsDrag] = useState(false);
  // 시작 지점
  const [startX, setStartX] = useState();

  // 드래그 시작 함수
  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  }

  // 드래그 중단
  const onDragEnd = () => {
    setIsDrag(false);
  }

  // 드래그로 이동
  const onDragMove = (e) => {
    if(isDrag){
      const { scrollWidth, clientWidth, scrollLeft} = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;

      if(scrollLeft === 0){
        setStartX(e.pageX);
      } else if(scrollWidth <= clientWidth + scrollLeft){
        setStartX(e.pageX + scrollLeft);
      }
    }
  }

  //쓰로틀 구현(이벤트 오작동 방지 목적)
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if(!throttled){
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    }
  }
  //쓰로틀 지연시간
  const delay = 10;
  const onThrottledDragMove = throttle(onDragMove, delay);
  return <ContentWrapper
    onMouseDown={onDragStart}
    onMouseMove={onThrottledDragMove}
    onMouseUp={onDragEnd}
    onMouseLeave={onDragEnd}
    ref={scrollRef}
  >
    {children}
  </ContentWrapper>
}

export default VerticalWrapper;