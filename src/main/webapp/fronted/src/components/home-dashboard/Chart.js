import { Chart } from "chart.js";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

/**
 * 전체현황을 나타내는 차트를 구성해야함
 * 차트는 데이터가 넘어오면 섹션별로 색상이 구분되어야함
 * 차트의 섹션별 색상을 지정할 수 있어야함
 * 구성은 다음과 같음
 * 
 * -윗줄은 현황별 차트를 가시화 3열로 구성
 * -아랫줄은 한줄로 구성하여 월별 현황을 도식화
 * 
 */


function TestChart(){
  const canvasDom = useRef(null);
  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["조", "권", "김"],
        datasets: [
          {
            label: "자금력",
            data: [550, 30, 240],
          }
        ]
      }
    });
  });
  return(
    <Container>
      <canvas ref={TestChart}></canvas>
    </Container>
  );
}

export default TestChart;