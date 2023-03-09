import styled from "styled-components";

const CategoryBox = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const CategoryBt = styled.button`
  border: 1px solid #7ca2eb;
  border-radius: 10px;
  padding: 5px 10px;
  color: #7ca2eb;
  background: white;
  margin-right: 5px;

  &.click{
    color: white;
    background: #7ca2eb;
  }
`;

function ShopCategory({ data, clicked, onClick }) {
  return (
    <CategoryBox>
      {data && data.map((obj, index) => {
        return (
          <CategoryBt
            key={index}
            className={clicked === obj.value ? "click" : null}
            value={obj.value}
            onClick={(e) => onClick(e)}
          >
            {obj.title}
          </CategoryBt>
        )
      })}
    </CategoryBox>
  );
}

export default ShopCategory;