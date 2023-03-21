import styled from "styled-components";

const MemberBox = styled.div`
  width: 100%;
  height: 50px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .flex{
    display: flex;
    align-items: center;
  }

  .member{
    flex: 3;
    justify-content: flex-start;
  }
  .edit{
    flex: 1;
    justify-content: flex-end;
    
    > a{
      text-decoration: none;
      color: #7e8080;

      :hover{
        text-decoration: underline;
        color: #7ca2eb;
      }
    }
  }
  .profile-img{
    width: 60px;
    height: 60px;
    margin-right: 20px;
    border-radius: 50%;
  }
  .name{
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

function MemberCard() {
  return (
    <MemberBox className="flex">
      <div className="member flex">
        <img src="../../img/profile.jpg" alt=".." className="profile-img" />
          <div>
            <label className="name">회원아이디</label>
          </div>
      </div>
      <div className="edit flex">
        <a href="/my/edit">프로필 수정</a>
      </div>
    </MemberBox>
  )
}

export default MemberCard;