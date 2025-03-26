"use client";

import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import InvoiceLists from "@/components/Pages/Invoice/InvoiceLists";

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

export default Page