import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer //차트를 넣을 컨테이너
} from 'recharts';

const ChartContainer = styled.div`
  margin: 20px;
  padding: 20px;

  -webkit-box-shadow: 0px 0px 15px -1px #000000; 
  box-shadow: 0px 0px 15px -1px #000000;
`;

const ChartTitle = styled.h3`
  margin-bottom: 30px;
`;

//차트를 구성할 데이터
const testdata = [
  { month: '1월', test: 4000 }, { month: '2월', test: 4000 },
  { month: '3월', test: 3400 }, { month: '4월', test: 2000 },
  { month: '5월', test: 2000 }, { month: '6월', test: 1200 },
  { month: '7월', test: 4500 }, { month: '8월', test: 3400 },
  { month: '9월', test: 1200 }, { month: '10월', test: 5600 },
  { month: '11월', test: 5600 }, { month: '12월', test: 4000 },
];

function Chart({ title, data, datakey, grid }) {
  return (
    <ChartContainer>
      <ChartTitle>연간 매출분석</ChartTitle>
      {/* aspect : width / height의 비율 지정 */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={testdata}>
          {/* datakey: 사용될 데이터, stroke: 색상 */}
          <XAxis dataKey="month" stroke="#5550bd" />
          {/* Y축에 대한지정, dataKey : 표현 내용 */}
          <YAxis />
          <Line type="monotone" dataKey="test" />
          {/* 마우스 이동 시 상세정보 확인 */}
          <Tooltip />
          {/* 
            그래프의 격자를 표현할 때 사용
            grid가 props로 넘어온 경우만 표현
           */}
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default Chart;