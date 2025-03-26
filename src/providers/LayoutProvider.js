"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import LeftSidebar from "@/components/Layouts/LeftSidebar";
import TopNavbar from "@/components/Layouts/TopNavbar";
import Footer from "@/components/Layouts/Footer";
import ScrollToTop from "@/components/Layouts/ScrollToTop";
import ControlPanelModal from "@/components/Layouts/ControlPanelModal";
import withAuth from "@/components/Common/withAuth";

const authPaths = [
  "/authentication/sign-in",
  "/authentication/sign-up",
  "/authentication/forgot-password",
  "/authentication/lock-screen",
  "/authentication/confirm-mail",
  "/authentication/logout",
];

const LayoutProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const isAuthPage = authPaths.some((authPath) => pathname.startsWith(authPath));

  const toggleActive = () => {
    setActive(!active);
  };

  const LayoutContent = () => (
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

  const ProtectedLayout = withAuth(LayoutContent, ['Admin', 'Employee']);
  return isAuthPage ? <LayoutContent /> : <ProtectedLayout />;
};

export default LayoutProvider;