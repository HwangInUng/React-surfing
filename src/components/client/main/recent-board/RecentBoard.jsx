import styled from "styled-components";
import BoardItem from "./BoardItem";

const RecentDiv = styled.div`
  height: 350px;

  .board-title{
    font-size: 1.7rem;
    font-weight: bold;
  }
`;

const BoardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 85%;
  align-items: center;
`;

function RecentBoard(){
  const testData = [
    { name: "게시물1", writer: "작성자1", hit: "230" },
    { name: "게시물2", writer: "작성자2", hit: "33" },
    { name: "게시물3", writer: "작성자3", hit: "123" },
    { name: "게시물4", writer: "작성자4", hit: "64" },
  ];
  return (
    <RecentDiv>
      <label className="board-title">최근 뽐내기</label>
      <BoardWrapper>
        {testData && testData.map((data, index) => {
          return(
            <BoardItem key={index} data={data} index={index}></BoardItem>
          )
        })}
      </BoardWrapper>
    </RecentDiv>
  );
}

export default RecentBoard;