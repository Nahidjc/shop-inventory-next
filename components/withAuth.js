"use client";
import Login from './Auth/Login';
import { useSelector } from 'react-redux';
const withAuth = Component => {
    const Auth = (props) => {
      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
      if (!isAuthenticated) {
        return (
          <Login />
        );
      }
      return (
        <Component {...props} />
      );
    };
  
    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default withAuth;