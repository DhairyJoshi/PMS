"use client"

import React from "react";
import Grid from "@mui/material/Grid";
import SimpleSnackbars from "@/components/UIElements/Snackbar/SimpleSnackbars";
import Customization from "@/components/UIElements/Snackbar/Customization";
import PositionedSnackbars from "@/components/UIElements/Snackbar/PositionedSnackbars";
import ComplementaryProjects from "@/components/UIElements/Snackbar/ComplementaryProjects";
import PageTitle from "@/components/Common/PageTitle";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Snackbar"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* SimpleSnackbars */}
          <SimpleSnackbars />

          {/* PositionedSnackbars */}
          <PositionedSnackbars />

          {/* ComplementaryProjects */}
          <ComplementaryProjects />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* Customization */}
          <Customization />
        </Grid>
      </Grid>
    </>
  );
}

export default Page;