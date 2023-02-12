import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x축에 대한 설정
  LinearScale,
  PointElement
} from 'chart.js';
import { Container } from "react-bootstrap";

// 차트구성에 필요한 요소들을 등록
ChartJS.register(
  LineElement,
  CategoryScale, //x축에 대한 설정
  LinearScale,
  PointElement
);

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
  const data = {
    type: 'line',
    datasets: [
      {
        labels: 'Test',
        data: {  //Object형태로 지정가능
          test1: 10,
          test2: 2,
          test3: 8
        },
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqus',
        tension: 0.4 //장력 추가
      }
    ]
  }

  const options = {
    plugins: {
      legend: true
    },
    layout: {
      padding: 10
    },
    scales:{
      y: {
        min: 1, //최소값
        max: 15, //최대값
      }
    }
  }

  return(
    <Container>
      <Line
        data={data}
        options={options}
      ></Line>
    </Container>
  );
}

export default TestChart;