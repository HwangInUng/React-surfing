import styled from "styled-components";
/**
 * 실제로 보여지는 모든 결과는 해당 페이지에 출력되어야함
 * 사이드바의 링크와 매칭하여 해당 페이지에 출력되는 정보가 다르게 나타나야함
 * 기본으로 Container를 가지고 있는 상태에서 하위 구성요소들을 페이지 path에 맞춰서 출력
 */

//전체를 감쌀 컨테이너 생성
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: orange;
`;

function Center(){
  return (
    <Container>
      test
    </Container>
  );
}

export default Center;