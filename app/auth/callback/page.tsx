'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/userSlice';

const AuthCallbackPage = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
      const token = searchParams!.get('token');
      const name = searchParams!.get('name');
      const email = searchParams!.get('email');
      const avatar = searchParams!.get('avatar');

      if (token && name && email ) {
        dispatch(setUser({ token, name, email, ...(avatar && { avatar }) }));
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("avatar", avatar || "");
        router.push("/");
      }else{
        router.push("/login");
      }
    }, [searchParams, dispatch,router]);

  return <div className="h-full w-full flex items-center justify-center text-white font-bold">Authenticating...</div>;
};

export default AuthCallbackPage;
