import styled from "styled-components";
import VerticalWrapper from "../../../common/VerticalWrapper";
import BoardItem from "./BoardItem";

const RecentDiv = styled.div`
  height: 300px;
  
  .board-title{
    font-size: 1.7rem;
    font-weight: bold;
  }
  `;

function RecentBoard() {
  const testData = [
    { name: "게시물1", writer: "작성자1", hit: "230", src: "profile.jpg" },
    { name: "게시물2", writer: "작성자2", hit: "33", src: "test.jpg" },
    { name: "게시물3", writer: "작성자3", hit: "123", src: "main.jpg" },
    { name: "게시물4", writer: "작성자4", hit: "64", src: "logo.png" },
    { name: "게시물5", writer: "작성자5", hit: "64", src: "home.png" },
  ];
  return (
    <RecentDiv>
      <label className="board-title">최근 뽐내기</label>
      <VerticalWrapper>
        {testData && testData.map((data, index) => {
          return (
            <BoardItem
              key={index}
              data={data}
              index={index}
            />
          )
        })}
      </VerticalWrapper>
    </RecentDiv>
  );
}

export default RecentBoard;