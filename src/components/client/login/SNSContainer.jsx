import styled from "styled-components";
import SNSLink from "./SNSLink";

const Container = styled.div`
  width: 100%;
  height: 30vh;
`;

function SNSContainer() {
  const loginData = [
    { name: "카카오 로그인", img: "./img/login/kakao.png", back: "yellow" },
    { name: "구글 로그인", img: "./img/login/google.png", back: "#de4b39" },
    { name: "네이버 로그인", img: "./img/login/naver.png", back: "#03bf19" },
  ];
  return (
    <Container>
      {loginData && loginData.map((data, index) => {
        return (
          <SNSLink 
            key={index}
            name={data.name}
            back={data.back}
            img={data.img}
          />
        )
      })}
    </Container>
  )
}

export default SNSContainer;