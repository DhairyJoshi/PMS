"use client";

import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import SupportForm from "@/components/Pages/Support/SupportForm";
import withAuth from "@/components/Common/withAuth";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Support"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      {/* SupportForm */}
      <SupportForm />
    </>
  );
}

export default withAuth(Page);