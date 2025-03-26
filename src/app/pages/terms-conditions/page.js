"use client";

import React from "react";
import TermsConditionsContent from "@/components/Pages/TermsConditions/TermsConditionsContent";

import PageTitle from "@/components/Common/PageTitle";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Terms & Conditions"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <TermsConditionsContent />
    </>
  );
}

export default Page