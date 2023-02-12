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

import { Line } from "react-chartjs-2";

const data = {
  labels: ["test1", "test2", "test3", "test4"],
  dataset: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(54, 162, 188)",
      borderWidth: 2,
      data: [1, 2, 4, 5],
    },
  ],
};

function Chart() {
  return (
    <Line type="line" data={data} />
  )
}

export default Chart;