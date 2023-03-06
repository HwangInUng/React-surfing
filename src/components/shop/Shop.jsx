import Bt from "../common/Bt";
import styled from "styled-components";

const ShopContainer = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  padding-top: 20px;
`;

const FormContainer = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  text-align: 

  -webkit-box-shadow: 0px 0px 5px -1px #000000; 
  box-shadow: 0px 0px 5px -1px #000000;
`;

const Input = styled.input`
  width: 70%;
  height: 40px;
  padding: 10px;
  margin-right: 5px;
  margin-bottom: 20px;
  border: 1px solid lightGray;
  border-radius: 10px;

  * {
    transition: all ease-in 0.5s;
  }

  outline: none;

  :focus{
    border: 1px solid #7ca2eb;
    box-shadow: 0px 0px 5px #4643f496;
    background: none;
    background-position: 2%;
  }
`;

function Shop() {
  //클릭 시 카카오 API를 통해 주소 및 위도/경도 획득 함수
  const searchAddress = () => {
    
  }
  //반복되는 input 태그에 대한 정보를 담을 객체
  const inputData = [
    { ph: "매장명", name: "shopName" },
    { ph: "매장번호", name: "shopCall" },
    { ph: "오픈시간", name: "shopStart" },
    { ph: "닫는시간", name: "shopEnd" }
  ];
  return (
    <ShopContainer>
      <FormContainer>
        <div style={{ width: "70%" }}>
          <Input placeholder="지역주소" name="shopArea" />
          <Bt btName="주소찾기" onClick={searchAddress} color="dark" />
          <Input placeholder="상세주소" name="shopTown" />
          <input type="hidden" name="shopLati" />
          <input type="hidden" name="shopLongi" />
        </div>
        {inputData && inputData.map((input, index) => {
          return (
            <Input key={index} placeholder={input.ph} name={input.name} />
          )
        })}
      </FormContainer>
    </ShopContainer>
  );
}

export default Shop;