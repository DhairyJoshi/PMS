"use client";

import React from "react";
import BasicTooltip from "@/components/UIElements/Tooltip/BasicTooltip";
import PositionedTooltips from "@/components/UIElements/Tooltip/PositionedTooltips";
import PageTitle from "@/components/Common/PageTitle";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Tooltip"
        dashboardUrl="/"
        dashboardText="Dashboard"
      /> 
      {/* BasicTooltip */}
      <BasicTooltip />

      {/* PositionedTooltips */}
      <PositionedTooltips />
    </>
  );
}

export default Page;