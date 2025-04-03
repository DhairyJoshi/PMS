"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import LeftSidebar from "@/components/Layouts/LeftSidebar";
import TopNavbar from "@/components/Layouts/TopNavbar";
import Footer from "@/components/Layouts/Footer";
import ScrollToTop from "@/components/Layouts/ScrollToTop";
import ControlPanelModal from "@/components/Layouts/ControlPanelModal";
import { Box, CircularProgress } from "@mui/material";

const authPaths = [
  "/authentication/sign-in",
  "/authentication/sign-up",
  "/authentication/forgot-password",
  "/authentication/lock-screen",
  "/authentication/confirm-mail",
  "/authentication/logout",
];

const allowedRoles = ["Admin", "Employee", "Client"];

const LayoutProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const isAuthPage = authPaths.some((authPath) => pathname.startsWith(authPath));

  const toggleActive = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isAuthPage) {
      const userRole = Cookies.get("userRole");

      if (!userRole) {
        router.replace("/authentication/sign-in");
        return;
      }

      if (!allowedRoles.includes(userRole)) {
        router.replace("/access-denied");
        return;
      }
    }
    setLoading(false);
  }, [isAuthPage, router]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <div className={`main-wrapper-content ${active ? "active" : ""}`}>
        {!isAuthPage && (
          <>
            <TopNavbar toggleActive={toggleActive} />
            <LeftSidebar toggleActive={toggleActive} />
          </>
        )}

        <div className="main-content">
          {children}
          {!isAuthPage && <Footer />}
        </div>
      </div>

      <ScrollToTop />

      {!isAuthPage && <ControlPanelModal />}
    </>
  );
};

export default LayoutProvider;