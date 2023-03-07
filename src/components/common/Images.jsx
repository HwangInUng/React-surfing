import { useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 80%;
  height: 200px;
  margin-bottom: 10px;
  border: 1px solid lightGray;
  border-radius: 10px;

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
    border-radius: 10px;
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
  }
`;

/*
  -이미지를 선택하여 등록할 때 미리보기를 지원
  -이미지는 최대 3장으로 제한
  -잘못선택된 이미지에 대한 삭제 지원
*/
function Images(props) {
  //보여줄 이미지 state
  const [showImages, setShowImages] = useState([]);
  let imageLists = [];

  // 이미지의 상대경로 저장
  const addImages = (e) => {
    //선택한 파일 배열
    const files = e.target.files;

    //이미지들의 URL을 저장할 배열
    let imageUrlLists = [...showImages];
    for (let i = 0; i < files.length; i++) {
      //이미지 배열의 현재 이미지의 URL주소를 반환
      const currentImageUrl = URL.createObjectURL(files[i]);
      imageUrlLists.push(currentImageUrl); //이미지 URL 저장

      //파일 객체 새로운 배열에 저장
      imageLists.push(files[i]);
    }
    //선택할 수 있는 이미지의 갯수 제한
    if (imageUrlLists.length > 3) {
      // 조건을 초과할 경우 초과된 항목 삭제
      imageUrlLists = imageUrlLists.slice(0, 3);
      imageLists = imageLists.slice(0, 3);
      alert("사진은 최대 3장까지만 등록가능합니다.");
    }
    //state값 변경
    props.setFiles(imageLists);
    setShowImages(imageUrlLists);
  }

  /*
    -이미지 상단의 x 버튼 클릭 시 이미지 미리보기 및 실제 객체 삭제
    -props.setFiles() : 현재 files의 상태를 filter로 변경하여 적용
    -showImages의 상태를 변경하여 미리보기 갯수 조절
  */
  const deleteImage = (id) => {
    props.setFiles((current) => current.filter((_, index) => index !== id));
    setShowImages(showImages.filter((_, index) => index !== id));
  }
  return (
    <ImageContainer>
      <div>
        <ImageLabel htmlFor="inputFile" onChange={addImages}>
          <input className="image-input" type="file" id="inputFile" multiple />
          <span>사진추가</span>
        </ImageLabel>
      </div>
      <div style={{ display: "flex" }}>
        {showImages.map((image, id) => {
          return (
            <AddedImage key={id}>
              <span className="delete" onClick={() => deleteImage(id)}>X</span>
              <img className="add-image" src={image} alt={`${image}-${id}`} />
            </AddedImage>
          )
        })}
      </div>
    </ImageContainer>
  );
}

export default Images;