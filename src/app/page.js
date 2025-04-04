"use client";

import React, { useEffect, useState } from "react";
import HomePageAdmin from "@/components/Common/HomePageAdmin";
import HomePageEmployee from "@/components/Common/HomePageEmployee";
import HomePageClient from "@/components/Common/HomePageClient";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function Page() {
  const reduxRole = useSelector((state) => state.login.userRole);
  const [userRole, setUserRole] = useState(reduxRole);

  useEffect(() => {
    if (!reduxRole) {
      const roleFromCookie = Cookies.get("userRole");
      setUserRole(roleFromCookie);
    }
  }, [reduxRole]);

  return (
    <>
      { userRole === "Admin" && <HomePageAdmin /> }
      { userRole === "Employee" && <HomePageEmployee /> }
      { userRole === "Client" && <HomePageClient /> }
    </>
  );
 }