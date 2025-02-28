"use client";

import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import InvoiceLists from "@/components/Pages/Invoice/InvoiceLists";
import withAuth from "@/components/Common/withAuth";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Invoice"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <InvoiceLists />
    </>
  );
}

export default withAuth(Page);