import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import CircularLoading from './Loader/CircularLoading';

const AuthProvider = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      if (router.pathname !== '/login') {
        router.push('/login');
      }
    } else {
        setLoading(false);
    }
  }, [isAuthenticated, router]);
  return loading ? <CircularLoading /> : children;
};

export default AuthProvider;
