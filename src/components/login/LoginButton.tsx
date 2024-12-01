
import { useAuth0 } from "@auth0/auth0-react";

import React from 'react'
import Button from "../button/Button";

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated}=useAuth0();
  return <>
  {
    !isAuthenticated && <>
        <Button onClick={()=>loginWithRedirect()}>
            Sign In
        </Button>
        </>
}


    </>
}

export default LoginButton