import React from "react";
import { GoogleLogin, GoogleOAuthProvider, hasGrantedAnyScopeGoogle } from "@react-oauth/google";
import axios from "axios";
import jwtDecode from "jwt-decode";

function LoginGoogle() {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const onSuccess = async (response) => {
    const member = jwtDecode(response.credential);
    console.log(member);
    await axios.post('/api/client/auth/login/google-member', {
      memberId: member.email,
      memberName: member.family_name + member.given_name
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  const onError = (err) => {
    console.log(err);
  }

  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
        />
      </GoogleOAuthProvider>
    </React.Fragment>
  )
}

export default LoginGoogle;