import Topbar from "../main/topbar/Topbar";
import ClientContainer from "../../common/ClientContainer";
import Footer from "../main/Footer";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

const DetailBox = styled.div`
  width: 70%;
  margin: 20px auto;
  padding: 20px;
  height: 500px;
  border-radius: 20px;
  box-shadow: 1px 1px 3px 1px #7ca2eb;

  .flex{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0px;

    > a{
      background: #7ca2eb;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 400;
      color: white;
      padding: 5px;
      margin-top: 15px;
      border-radius: 10px;
    }
  }
  .bottom{
    border-bottom: 1px solid #7ca2eb;
  }
  .space{
    margin: auto;
    width: 100% !important;
    justify-content: space-between !important;

    > div{
      text-align: center;
      width: 50%;
      margin: 5px 0px;
    }
    .content{
      font-size: 1.1rem;
      font-weight: 400;
    }
    .detail{
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
  .result-img{
    margin: 10px;
    width: 60%;
    border-radius: 20px;
  }
`;
function ReservDetail() {
  const location = useLocation();
  const reserv = location.state;
  //yyyy-MM-dd 형식으로 변환하여 반환
  const rsvDate = () => {
    const yyyyMMdd = reserv.rsvDate;
    const year = yyyyMMdd.substring(0, 4);
    const month = yyyyMMdd.substring(4, 6);
    const date = yyyyMMdd.substring(6, 8);
    return year + "년 " + month + "월 " + date + "일";
  }
  const amount = reserv.payment.payAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <>
      <Topbar />
      <ClientContainer>
        <DetailBox>
          <div className="flex bottom">
            <img
              src="/img/reserv.png"
              alt="..."
              className="result-img"
            />
          </div>
          <div className="flex space">
            <div>
              <label className="content">날짜 / 시간</label>
            </div>
            <div>
              <label className="detail">
                {rsvDate() + ' / ' + reserv.rsvTime + ':00'}
              </label>
            </div>
          </div>
          <div className="flex space">
            <div>
              <label className="content">예약자명 / 휴대폰</label>
            </div>
            <div>
              <label className="detail">
                {reserv.rsvName + ' / ' + reserv.rsvPhone}
              </label>
            </div>
          </div>
          <div className="flex space">
            <div>
              <label className="content">서핑샵 / 강사</label>
            </div>
            <div>
              <label className="detail">
                {reserv.shop.shopName + ' / ' + reserv.trainer.trainerName}
              </label>
            </div>
          </div>
          <div className="flex space">
            <div>
              <label className="content">메뉴 / 금액</label>
            </div>
            <div>
              <label className="detail">
                {reserv.payment.payName + ' / ' + amount + '원'}
              </label>
            </div>
          </div>
          <div className="flex">
            <a href="/">홈으로 이동</a>
          </div>
        </DetailBox >
      </ClientContainer >
      <Footer />
    </>
  )
}

export default ReservDetail;