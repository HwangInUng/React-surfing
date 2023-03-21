import styled from "styled-components";

const CenterContainer = styled.div`
  position: relative;
  top: 0px;
  margin: auto;
  padding: 30px 30px;
  width: 50%;
  border-left: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;

  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
/*
  -클라이언트가 사용하는 페이지의 중앙 영역을 담당할 컨테이너
  -<Main/>에서 분리하여 사용 
  -props로 children을 전달받아 자식 컴포넌트 렌더링
  */
function ClientContainer({children}){
  return <CenterContainer>{children}</CenterContainer>
}

export default ClientContainer;