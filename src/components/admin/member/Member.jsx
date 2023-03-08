import styled from "styled-components";
import MemberCategory from "./MemberCategory";
import MemberChart from "./MemberChart";
import MemberTable from "./MemberTable";

const MemberContainer = styled.div`
  flex: 5;
  padding: 15px;
  padding-top: 20px;
`;

function Member() {
  return (
    <MemberContainer>
      <MemberCategory />
      <MemberChart />
      <MemberTable />
    </MemberContainer>
  );
}

export default Member;