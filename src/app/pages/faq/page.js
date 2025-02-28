"use client";

import React from "react";
import BasicAccordion from "@/components/UIElements/Accordion/BasicAccordion";
import ControlledAccordion from "@/components/UIElements/Accordion/ControlledAccordion";
import Customization from "@/components/UIElements/Accordion/Customization";
import PageTitle from "@/components/Common/PageTitle";
import withAuth from "@/components/Common/withAuth";

const Page = () => {
  return (
    <>
      <PageTitle pageTitle="FAQ" dashboardUrl="/" dashboardText="Dashboard" />

      {/* BasicAccordion */}
      <BasicAccordion />

      {/* ControlledAccordion */}
      <ControlledAccordion />

      {/* Customization */}
      <Customization />
    </>
  );
}

export default withAuth(Page);