import styled from "styled-components";

const EmptyContainer = styled.div`
  margin: 10px auto;
  width: 50%;
  height: 200px;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .top{
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 1px solid #7ca2eb;
    margin: 10px 0px;
  }
  .bottom{
    font-size: 1.6rem;
    font-weight: 300;
    color: #7ca2eb;
  }
`;

// 매장등록이 되지않은 회원 접속 시 출력
function EmptyList({ title }) {
  return (
    <EmptyContainer>
      <label className="top">등록된 {title === "강사" ? "강사가" : "상품이"} 없습니다.</label>
      <label className="bottom">{title === "강사" ? "강사를" : "상품을"} 등록해주세요.</label>
    </EmptyContainer>
  )
}

export default EmptyList;