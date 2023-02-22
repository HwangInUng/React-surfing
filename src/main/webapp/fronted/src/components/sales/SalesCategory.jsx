import styled from "styled-components";

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 20px;
`;

const CategoryButton = styled.button`
  margin-right: 5px;
  padding: 10px;
  background-color: #76c9e8;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  border-style: none;
  color: white;
`;

function SalesCategory(){
  return (
    <CategoryContainer>
      <CategoryButton>주간</CategoryButton>
      <CategoryButton>월간</CategoryButton>
      <CategoryButton>분기</CategoryButton>
    </CategoryContainer>
  );
}

export default SalesCategory;