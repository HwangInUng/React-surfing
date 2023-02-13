import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
} from 'chart.js';
import styled from "styled-components";

//차트를 구성하는 요소를 반드시 등록해주어야 사용이 가능
ChartJS.register(ArcElement);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 30%;
`;

function DoughnutChart() {
  const data = {  //데이터에 대한 세부적인 범위 설정 필요
    labels: ['red', 'blue', 'black', 'green'],
    datasets: [
      {
        label: 'Test Chart',
        data: [300, 90, 200, 150], //DB에서 불러온 데이터를 배열로 대입
        backgroundColor: [
          'red',
          'blue',
          'black',
          'green'
        ],
        hoverOffset: 4
      }
    ]
  }

  return (
    <Container>
      <label>강습</label>
      <Doughnut
        data={data}
        style={
          {
            width: '90%',
            height: '90%'
          }
        }
      >
      </Doughnut>
    </Container>
  );
}

export default DoughnutChart;