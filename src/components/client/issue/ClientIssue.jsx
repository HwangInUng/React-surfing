import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import Topbar from "../main/topbar/Topbar";
import Bt from "../../common/Bt"
import { useNavigate } from "react-router-dom";

const SeacrchBox = styled.div`
  width: 60%;
  display: flex;

  > input{
    font-size: 1.2rem;
    color: black;
    border-radius: 10px;
    border: 1px solid #7ca2eb;
    padding: 3px;
    margin: 0px 5px;
  }
`;

const VideoBox = styled.div`

`;

function ClientIssue() {
  // 영상 목록 state
  const [list, setList] = useState({});
  // 검색어 state
  const [category, setCategory] = useState("");
  // API요청에 필요한 파라미터
  const [params, setParams] = useState({
    key: "",
    part: 'snippet',
    q: '서핑',
    maxResults: 10,
    type: "video",
  });

  // API요청 메소드
  // const getYoutube = useCallback(() => {
  //   axios.get(`https://www.googleapis.com/youtube/v3/search`, { params })
  //     .then((res) => {
  //       console.log(res);
  //       if (!res) {
  //         alert("검색된 영상이 없습니다.");
  //         return;
  //       }
  //     }).catch((err) => {
  //       alert(err);
  //     });
  // });

  // const searchVideo = () => {
  //   getYoutube();
  // }

  // 최초 로드시 영상 조회
  // useEffect(() => {
  //   getYoutube();
  // }, []);
  const navigate = useNavigate();
  useEffect(() => {
    alert("서비스 준비중입니다!!");
    navigate("/");
  }, []);
  return (
    <>
      <Topbar />
      <ClientContainer>
        <SeacrchBox>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Bt
            btName="검색"
            width="20%"
            font="1.2rem"
            // onClick={searchVideo}
          />
        </SeacrchBox>
        <VideoBox></VideoBox>
      </ClientContainer>
      <Footer />
    </>
  )
}

export default ClientIssue;