import { Col } from "react-bootstrap";
import styled from "styled-components";
import LineChart from "../components/home-dashboard/Chart";
import Chart from "../components/home-dashboard/Chart";
/**
 * 실제로 보여지는 모든 결과는 해당 페이지에 출력되어야함
 * 사이드바의 링크와 매칭하여 해당 페이지에 출력되는 정보가 다르게 나타나야함
 * 기본으로 Container를 가지고 있는 상태에서 하위 구성요소들을 페이지 path에 맞춰서 출력
 * 해당 영역별 사이즈는 변수로 선언하여 적용
 */

//전체를 감쌀 컨테이너 생성
const Container = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 20;
  background: orange;
`;

const Row = styled.div`
  display: flex;
  height: 300px;
  border: 1px solid #fffffe;
`;

function Center() {
  return (
    <Container>
      <Row>
        <Col md={4} className="border">종합현황</Col>
        <Col md={4} className="border">강습</Col>
        <Col md={4} className="border">상품</Col>
      </Row>
      <Row>
        <LineChart></LineChart>
      </Row>
    </Container>
  );
}

export default Center;