"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import Basic from "@/components/UIElements/Select/Basic";
import AutoWidth from "@/components/UIElements/Select/AutoWidth";
import Customization from "@/components/UIElements/Select/Customization";
import MultipleSelectDefault from "@/components/UIElements/Select/MultipleSelectDefault";
import MultipleSelectCheckmarks from "@/components/UIElements/Select/MultipleSelectCheckmarks";
import MultipleSelectChip from "@/components/UIElements/Select/MultipleSelectChip";
import PageTitle from "@/components/Common/PageTitle";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Select"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* Basic */}
          <Basic />

          {/* Customization */}
          <Customization />

          {/* MultipleSelectDefault */}
          <MultipleSelectDefault />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          {/* AutoWidth */}
          <AutoWidth />

          {/* MultipleSelectCheckmarks */}
          <MultipleSelectCheckmarks />

          {/* MultipleSelectChip */}
          <MultipleSelectChip />
        </Grid>
      </Grid>
    </>
  );
}

export default Page;