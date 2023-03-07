import { useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 200px;
  margin-bottom: 10px;

  .image-input{
    display:none;
  }
`;

const ImageLabel = styled.label`
  margin: 5px 5px;
  padding: 3px;
  border: 1px solid #7ca2eb;
  border-radius: 10px;
  font-weight: bold;
  font-size: 10px;
  color: #7ca2eb;
  cursor: pointer;
`;

const AddedImage = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px 5px;
  position: relative;

  .add-image{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .delete{
    position: absolute;
    border-radius: 50%;
    border: 1px solid #7ca2eb;
    padding: 1px 5px;
    font-weight: bold;
    font-size: 1rem;
    top: -10px;
    left: 90px;
    background: white;
    color: #7ca2eb;
    cursor: pointer;
  }
`;

/*
  -이미지를 선택하여 등록할 때 미리보기를 지원
  -이미지는 프로필 이미지 1장에 대한 기능 지원
  -잘못선택된 이미지에 대한 삭제 지원
*/
function ProfileImage(props) {
  //보여줄 이미지 state
  const [showImage, setShowImage] = useState('');

  // 이미지의 상대경로 저장
  const addImage = (e) => {
    //선택한 파일 배열
    const file = e.target.files[0];

    //이미지 배열의 현재 이미지의 URL주소를 반환
    const currentImageUrl = URL.createObjectURL(file);

    //state값 변경
    props.setFile(file);
    setShowImage(currentImageUrl);
  }

  /*
    -이미지 상단의 x 버튼 클릭 시 이미지 미리보기 및 실제 객체 삭제
    -props.setFile() : 현재 file의 상태를 초기화
    -showImage의 상태를 변경하여 초기화
  */
  const deleteImage = () => {
    props.setFile("");
    setShowImage("");
  }
  return (
    <ImageContainer>
      <div>
        <ImageLabel htmlFor="inputFile" onChange={addImage}>
          <input className="image-input" type="file" id="inputFile" />
          <span style={{ fontSize: "0.7rem" }}>이미지 등록</span>
        </ImageLabel>
      </div>
      <div style={{ display: "flex" }}>
        {showImage !== "" ?
        <AddedImage>
          <span className="delete" onClick={deleteImage}>X</span>
          <img className="add-image" src={showImage} alt={`${showImage}`} />
        </AddedImage>
        : null}
      </div>
    </ImageContainer>
  );
}

export default ProfileImage;