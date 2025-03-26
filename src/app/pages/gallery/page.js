"use client";

import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import GalleryContent from "@/components/Pages/Gallery/GalleryContent";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Gallery"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <GalleryContent />
    </>
  );
}

export default Page;