import styled from "styled-components";

const ClientFooter = styled.footer`
  background: #dcdcdc;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    text-decoration: none;
    color: black;
  }
`;

function Footer(){
  return (
    <ClientFooter>
      <a href="#">이용약관</a><span>/</span>
      <a href="#">개인정보처리방침</a><span>/</span>
      <a href="#">사업자정보</a><span>/</span>
      <a href="#">사업자정보확인</a>
    </ClientFooter>
  )
}

export default Footer;