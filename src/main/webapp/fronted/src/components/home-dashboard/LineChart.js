import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x축에 대한 설정
  LinearScale,
  PointElement
} from 'chart.js';

// 차트구성에 필요한 요소들을 등록
ChartJS.register(
  LineElement,
  CategoryScale, //x축에 대한 설정
  LinearScale,
  PointElement
);

//멀티 차트에 대한 부분을 구성
function TestChart(){
  const data = {
    type: 'line',
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        label: 'Test Dataset',
        data: [10, 10, 30, 40, 20, 50, 40, 20, 40, 10, 60, 20],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1,
        pointBorderColor: '#13e8a5',
        tension: 0.2 //장력 추가
      }
    ]
  }

  const options = {
    responsive: false,
    plugins: {
      legend: {
      }
    },
    layout: {
      padding: 10
    },
    scales:{
      y: {
        min: 0, //최소값
        max: 70, //최대값
      },
    }
  }

  return(
      <Line
        data={data}
        options={options}
        style={
          {
            width: '100%',
          }
        }
      ></Line>
  );
}

export default TestChart;