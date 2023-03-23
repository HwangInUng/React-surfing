import styled from "styled-components";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";


const ChartContainer = styled.div`
  margin: 20px;
  padding: 15px;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 5px -1px #000000; 
  box-shadow: 0px 0px 5px -1px #000000;
`;

const ChartTitle = styled.h3`
  margin-left: 20px;
  font-weight: 600;
`;

const ChartWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
`;

const LineContainer = styled.div`
  flex: 3;
  margin: 0;
`;

const PieContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

const PieContent = styled.span`
  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 5px;
`;


function SalesChart() {
  const testdata = [
    { date: '1일', '매출': 400}, { date: '2일', '매출': 300},
    { date: '3일', '매출': 550}, { date: '4일', '매출': 200},
    { date: '5일', '매출': 600}, { date: '6일', '매출': 250},
    { date: '7일', '매출': 300}
  ];
  const piedata = [
    { name: '상품', value: 400 },
    { name: '강습', value: 700 }
  ];
  const COLORS = ['#e5aa80', '#84a1e5'];
  return (
    <ChartContainer>
      <ChartTitle>총 매출 67,000,000원</ChartTitle>
      <ChartWrapper>
        <LineContainer>
          {/* aspect : 설정해주지 않을 경우 차트 미출력 */}
          <ResponsiveContainer width="100%" aspect={5 / 1}>
            <LineChart
              data={testdata}
            >
              {/* 격자 생성 */}
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"date"} />
              <YAxis />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Legend />
              <Line type="monotone" dataKey="매출" stroke="#5550bd"/>
            </LineChart>
          </ResponsiveContainer>
        </LineContainer>
        {/* pie차트 영역 */}
        <PieContainer>
          <ResponsiveContainer width="100%">
            <PieChart>
              <Pie
                data={piedata} //차트에 넣을 데이터 셋
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={50}
                dataKey="value"
              >
                {piedata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <PieContent>상품 매출 : 00%</PieContent>
          <PieContent>강습 매출 : 00%</PieContent>
        </PieContainer>
      </ChartWrapper>
    </ChartContainer>
  );
}

export default SalesChart;