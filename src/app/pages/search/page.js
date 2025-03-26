"use client";

import React from "react";
import SearchContent from "@/components/Pages/Search/SearchContent";

import PageTitle from "@/components/Common/PageTitle";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Search"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <SearchContent />
    </>
  );
}

export default Page