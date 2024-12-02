
import { useAuth0 } from "@auth0/auth0-react";

import styles from './loginbutton.module.css';

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated}=useAuth0();
  return <>
  {
    !isAuthenticated && <>
    <div className={container}>
    <div >
        <button className={styles.button} onClick={()=>loginWithRedirect()}>
            Login with Auth0
        </button>
    </div>
    <div>
    <span>Auth0</span>, utilizing the secure <span>OAuth</span> authorization protocol, 
    allows you to sign up or log in seamlessly with your existing <span>Google, Microsoft, LinkedIn, or GitHub</span> accounts without sharing your credentials with the application.
    </div>
    </div>
        </>
}


    </>
}

const {container}=styles;

export default LoginButton