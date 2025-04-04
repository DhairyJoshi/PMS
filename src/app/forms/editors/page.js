"use client";

import React from "react";
import EditorArea from "@/components/Forms/EditorArea";
import PageTitle from "@/components/Common/PageTitle";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Editors"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <EditorArea />
    </>
  );
}

export default Page;