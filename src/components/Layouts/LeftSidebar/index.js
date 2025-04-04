import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SidebarDataAdmin, SidebarDataEmployee, SidebarDataClient } from "../LeftSidebar/SideBarData";
import SubMenu from "./SubMenu";
import Link from "next/link";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const SidebarNav = styled("nav")(({ theme }) => ({
  background: "#fff",
  boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
  width: "300px",
  padding: "30px 10px",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  transition: "350ms",
  zIndex: "10",
  overflowY: "auto",
}));

const SidebarWrap = styled("div")(({ theme }) => ({
  width: "100%",
}));

const Sidebar = ({ toggleActive }) => {
  const reduxRole = useSelector((state) => state.login.userRole);
  const [userRole, setUserRole] = useState(reduxRole);

  useEffect(() => {
    if (!reduxRole) {
      const roleFromCookie = Cookies.get("userRole");
      setUserRole(roleFromCookie);
    }
  }, [reduxRole]);

  let sidebarData = [];

  if (userRole === "Admin") {
    sidebarData = SidebarDataAdmin;
  } else if (userRole === "Employee") {
    sidebarData = SidebarDataEmployee;
  } else if (userRole === "Client") {
    sidebarData = SidebarDataClient;
  }

  return (
    <>
      <div className="leftSidebarDark">
        <SidebarNav className="LeftSidebarNav">
          <SidebarWrap>
            <Box
              sx={{
                mb: "20px",
                px: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Link href="/">
                <Image
                  src="/images/logo-full.png"
                  alt="Logo"
                  className="black-logo"
                  width={147}
                  height={41}
                />

                {/* For Dark Variation */}
                <Image
                  src="/images/logo-full-white.png"
                  alt="Logo"
                  className="white-logo"
                  width={147}
                  height={41}
                />
              </Link>

              <IconButton
                onClick={toggleActive}
                size="small"
                sx={{
                  background: "rgb(253, 237, 237)",
                  display: { lg: "none" },
                }}
              >
                <ClearIcon />
              </IconButton>
            </Box>

            {sidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </div>
    </>
  );
};

export default Sidebar;