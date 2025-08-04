"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const avatar = localStorage.getItem("avatar");

    if (token && name && email) {
      dispatch(
        setUser({
          token,
          name,
          email,
          avatar: avatar || "",
        })
      );
    }
  }, [dispatch]);

  return <>{children}</>;
}
