import styled from "styled-components";
import DoughnutChart from "../components/home-dashboard/DoughnutChart";
import LineChart from "../components/home-dashboard/LineChart";
import Total from "../components/home-dashboard/Total";
/**
 * 실제로 보여지는 모든 결과는 해당 페이지에 출력되어야함
 * 사이드바의 링크와 매칭하여 해당 페이지에 출력되는 정보가 다르게 나타나야함
 * 기본으로 Container를 가지고 있는 상태에서 하위 구성요소들을 페이지 path에 맞춰서 출력
 * 해당 영역별 사이즈는 변수로 선언하여 적용
 */

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

//전체를 감쌀 컨테이너 생성
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 93vh;
  margin: 0;
  padding: 20;
`;

//차트들을 담을 컨테이너
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 40vh;
  border: 1px solid #fffffe;
  margin: 0px 10px;
`;

function Center() {
  return (
    <Container>
      <Row>
        <Total/>
        <DoughnutChart />
        <DoughnutChart />
      </Row>
      <Row>
        <LineChart></LineChart>
      </Row>
    </Container>
  );
}

export default Center;