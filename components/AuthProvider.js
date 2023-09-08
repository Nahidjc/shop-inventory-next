import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const AuthProvider = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return children;
};

export default AuthProvider;
