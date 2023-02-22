import styled from "styled-components";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer, //차트를 넣을 컨테이너
  Bar
} from 'recharts';

const ChartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 12px -1px #000000; 
  box-shadow: 0px 0px 12px -1px #000000;
`;

const ChartTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 30px;
`;

//차트를 구성할 데이터
const testdata = [
  { month: '1월', 상품: 4000, 강습: 2000 }, { month: '2월', 상품: 4000, 강습: 700 },
  { month: '3월', 상품: 3400, 강습: 1500 }, { month: '4월', 상품: 2000, 강습: 2500 },
  { month: '5월', 상품: 2000, 강습: 2500 }, { month: '6월', 상품: 1200, 강습: 3500 },
  { month: '7월', 상품: 4500, 강습: 3000 }, { month: '8월', 상품: 3400, 강습: 4500 },
  { month: '9월', 상품: 1200, 강습: 3000 }, { month: '10월', 상품: 5600, 강습: 1600 },
  { month: '11월', 상품: 5600, 강습: 1000 }, { month: '12월', 상품: 4000, 강습: 600 },
];

function Chart({ title, data, datakey, grid }) {
  return (
    <ChartContainer>
      <ChartTitle>월별 매출현황</ChartTitle>
      {/* aspect : width / height의 비율 지정 */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart data={testdata}>
          {/* datakey: 사용될 데이터, stroke: 색상 */}
          <XAxis dataKey="month" stroke="#5550bd" />
          {/* Y축에 대한지정, dataKey : 표현 내용 */}
          <YAxis />
          {/* stackedId가 동일해야지 쌓임 */}
          <Bar dataKey="상품" stackId="a" fill="#5550bd" barSize={35} />
          <Bar dataKey="강습" stackId="a" fill="#82ca9d" />
          {/* <Line type="monotone" dataKey="test" /> */}
          {/* 마우스 이동 시 상세정보 확인 */}
          <Tooltip cursor={{fill: 'transparent'}}/>
          <Legend />
          {/* 
            그래프의 격자를 표현할 때 사용
            grid가 props로 넘어온 경우만 표현
           */}
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default Chart;