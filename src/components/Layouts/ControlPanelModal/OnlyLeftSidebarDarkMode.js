"use client";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "@/components/Layouts/ControlPanelModal/DarkAndLightMode.module.css";
import { Typography } from "@mui/material";

const OnlyLeftSidebarDarkMode = () => {
  // Light/Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("leftSidebarTheme");
    if (storedPreference === "leftSidebarDark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem(
      "leftSidebarTheme", isDarkMode ? "leftSidebarDark" : "light"
    );

    // Update the class on the <leftSidebarDark> element to apply the selected mode
    const htmlElement = document.querySelector(".leftSidebarDark");
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className={styles.darkModeBox}>
        <Typography
          as="h2"
          sx={{
            color: "#000 !important",
            fontSize: 16,
            fontWeight: 500,
            mb: "15px",
            pb: "5px",
            borderBottom: "1px solid #eee",
          }}
        >
          Only Left Sidebar Dark/Light Mode
        </Typography>

        <Button
          onClick={handleToggle}
          variant="contained"
          sx={{
            textTransform: "capitalize",
            fontSize: '13px'
          }}
          className="whiteColor"
        >
          Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </>
  );
};

export default OnlyLeftSidebarDarkMode;
