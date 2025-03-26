"use client";

import NotificationTable from "@/components/Notification/NotificationTable";
import PageTitle from "@/components/Common/PageTitle";

const Page = () => {
  return (
    <>
      <PageTitle
        pageTitle="Notification"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <NotificationTable />
    </>
  );
}

export default Page;