"use client";

import React from "react";
import SearchContent from "@/components/Pages/Search/SearchContent";

import PageTitle from "@/components/Common/PageTitle";
import withAuth from "@/components/Common/withAuth";

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

export default withAuth(Page, ['Admin', 'Employee']);