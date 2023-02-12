import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
} from 'chart.js';

//차트를 구성하는 요소를 반드시 등록해주어야 사용이 가능
ChartJS.register(ArcElement);

function DoughnutChart() {
  const data = {
    labels: ['red', 'blue', 'black'],
    datasets: [
      {
        label: 'Test Chart',
        data: [300, 90, 200], //DB에서 불러온 데이터를 배열로 대입
        backgroundColor:[
          'red',
          'blue',
          'black'
        ],
        hoverOffset: 4
      }
    ]
  }

  return (
    <Doughnut
      data={data}
    >
    </Doughnut>
  );
}

export default DoughnutChart;