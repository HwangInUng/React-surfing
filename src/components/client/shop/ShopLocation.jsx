import { useEffect } from "react";
import { useState } from "react";
import { Map, MapInfoWindow, MapMarker } from "react-kakao-maps-sdk";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MarkerTitle = styled.div`
  display: flex;
  width: 140px;
  justify-content: space-between;

  .inner-div{
    align-items: center;
    color: black;
  }

  .move-bt{
    color: white;
    font-weight: 500;
    border-radius: 5px;
    border: none;
    background: #7ca2eb;
  }
`;

function ShopLocation({ open, setOpen, selectSpot, shops }) {
  const navigate = useNavigate();
  const [spot, setSpot] = useState({
    spotIdx: 12,
    localName: "강원도",
    townName: "양양군",
    spotName: "강현면",
    spotLati: 38.147243,
    spotLongi: 128.6098,
  });
  console.log(selectSpot);

  //버튼 클릭 시 해당 매장의 상세페이지 이동 메소드
  const moveShopPage = (shopIdx) => {
    navigate(`/shop/detail?shopIdx=${shopIdx}`);
  }

  //지역 선택 시 맵의 센터 변경
  useEffect(() => {
    if (selectSpot.spotIdx !== 0) {
      setSpot(selectSpot);
    }
  }, [selectSpot]);
  return (
    <>
      <Modal
        isOpen={open}
        appElement={document.getElementById('root')}
        onRequestClose={() => setOpen((current) => !current)}
        style={{
          overlay: {
            boxShadow: "0px 0px 2px 0px #7ca2eb",
            padding: 10,
            borderRadius: 20,
            width: "60%",
            transition: "opacity 200ms ease-in-out",
            height: "60%",
            top: 200,
            left: "20%",
            backgroundColor: "white"
          },
          content: {
            borderRadius: 20,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }
        }}
      >
        <Map
          center={{ lat: spot.spotLati, lng: spot.spotLongi }}
          level={5}
          style={{ width: "100%", height: "100%" }}
        >
          {shops && shops.map((shop, index) => {
            //해당 지역의 조회된 매장리스트만큼 마커 생성
            return (
              <MapMarker
                key={index}
                position={{ lat: shop.shopLati, lng: shop.shopLongi }}
              >
                <MarkerTitle>
                  <div className="inner-div">
                    <label>
                      {shop.shopName}
                    </label>
                  </div>
                  <div className="inner-div">
                    <button
                      className="move-bt"
                      onClick={() => moveShopPage(shop.shopIdx)}
                    >
                      이동
                    </button>
                  </div>
                </MarkerTitle>
              </MapMarker>
            )
          })}
        </Map>
      </Modal>
    </>
  )
}

export default ShopLocation;