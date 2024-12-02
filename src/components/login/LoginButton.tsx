
import { useAuth0 } from "@auth0/auth0-react";

import styles from './loginbutton.module.css';

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated}=useAuth0();
  return <>
  {
    !isAuthenticated && <>
        <button className={styles.button} onClick={()=>loginWithRedirect()}>
            Login with Auth0
        </button>
        </>
}


    </>
}

export default LoginButton