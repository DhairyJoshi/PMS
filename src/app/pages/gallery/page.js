"use client";

import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import GalleryContent from "@/components/Pages/Gallery/GalleryContent";
import withAuth from "@/components/Common/withAuth";

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