import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';

//유저 1명을 담당할 링크
const WidgetSmLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;

  .widgetSmImg{
    width: 40px;
   height: 40px;
   border-radius: 50%;
   object-fit: cover;
  }
`;

const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const WidgetSmUserName = styled.span`
  font-weight: 600;
`;

const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`;

const WidgetSmButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;

  .widgetIcon{
    font-size: 1.5rem !important;
    margin-right: 5px;
  }
`;

function WidgetSmItem({data}) {
  return (
    <>
      < WidgetSmLink>
        <img
          className="widgetSmImg"
          src={data.src}
          alt="..."
        />
        <WidgetSmUser>
          {/* props로 넘겨받은 데이터 표현범위 */}
          <WidgetSmUserName>{data.name}</WidgetSmUserName>
          <WidgetSmUserTitle>{data.title}</WidgetSmUserTitle>
        </WidgetSmUser>
        <WidgetSmButton>
          <VisibilityIcon className="widgetIcon" />
          보러가기
        </WidgetSmButton>
      </WidgetSmLink >
    </>
  );
}

export default WidgetSmItem;