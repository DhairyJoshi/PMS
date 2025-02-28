"use client";

import NotificationTable from "@/components/Notification/NotificationTable";
import PageTitle from "@/components/Common/PageTitle";
import withAuth from "@/components/Common/withAuth";

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

export default withAuth(Page, ['Admin', 'Employee']);