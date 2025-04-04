"use client";

import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import GoogleMap from "@/components/Pages/Maps/GoogleMap";
import BasicMarkers from "@/components/Pages/Maps/BasicMarkers";
import EuropeMapWithGraticule from "@/components/Pages/Maps/EuropeMapWithGraticule";

const Page = () => {
  return (
    <>
      <PageTitle pageTitle="Maps" dashboardUrl="/" dashboardText="Dashboard" />

      {/* GoogleMap */}
      <GoogleMap />

      {/* BasicMarkers */}
      <BasicMarkers />

      {/* EuropeMapWithGraticule */}
      <EuropeMapWithGraticule />
    </>
  );
}

export default Page