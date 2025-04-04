"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import DefaultButtons from "@/components/UIElements/Buttons/DefaultButtons";
import OutlineButtons from "@/components/UIElements/Buttons/OutlineButtons";
import SoftButtons from "@/components/UIElements/Buttons/SoftButtons";
import ButtonsWithIcon from "@/components/UIElements/Buttons/ButtonsWithIcon";
import RoundedButtons from "@/components/UIElements/Buttons/RoundedButtons";
import OutlineRoundedButtons from "@/components/UIElements/Buttons/OutlineRoundedButtons";
import SizesButtons from "@/components/UIElements/Buttons/SizesButtons";
import Loading from "@/components/UIElements/Buttons/Loading";
import BlockButtons from "@/components/UIElements/Buttons/BlockButtons";
import BasicFAB from "@/components/UIElements/Buttons/BasicFAB";
import PageTitle from "@/components/Common/PageTitle";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Buttons"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* DefaultButtons */}
          <DefaultButtons />

          {/* SoftButtons */}
          <SoftButtons />

          {/* RoundedButtons */}
          <RoundedButtons />

          {/* SizesButtons */}
          <SizesButtons />

          {/* BlockButtons */}
          <BlockButtons />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* OutlineButtons */}
          <OutlineButtons />

          {/* ButtonsWithIcon */}
          <ButtonsWithIcon />

          {/* OutlineRoundedButtons */}
          <OutlineRoundedButtons />

          {/* BasicFAB */}
          <BasicFAB />

          {/* Loading */}
          <Loading />
        </Grid>
      </Grid>
    </>
  );
}

export default Page;