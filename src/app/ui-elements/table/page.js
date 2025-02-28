"use client";

import React from "react";
import BasicTable from "@/components/UIElements/Table/BasicTable";
import RecentOrders from "@/components/UIElements/Table/RecentOrders";
import TeamMembersList from "@/components/UIElements/Table/TeamMembersList";
import BrowserUsedTrafficReports from "@/components/UIElements/Table/BrowserUsedTrafficReports";
import MyTasks from "@/components/Dashboard/ProjectManagement/MyTasks";
import AllProjects from "@/components/Dashboard/ProjectManagement/AllProjects";
import DataTable from "@/components/UIElements/Table/DataTable";
import DenseTable from "@/components/UIElements/Table/DenseTable";
import SortingSelectingTable from "@/components/UIElements/Table/SortingSelectingTable";
import CustomizationTable from "@/components/UIElements/Table/CustomizationTable";
import PageTitle from "@/components/Common/PageTitle";
import withAuth from "@/components/Common/withAuth";

const Page = () => {
  return (
    <>
      <PageTitle pageTitle="Table" dashboardUrl="/" dashboardText="Dashboard" />

      {/* BasicTable */}
      <BasicTable />

      {/* RecentOrders */}
      <RecentOrders />

      {/* TeamMembersList */}
      <TeamMembersList />

      {/* BrowserUsedTrafficReports */}
      <BrowserUsedTrafficReports />

      {/* MyTasks */}
      <MyTasks />

      {/* AllProjects */}
      <AllProjects />

      {/* DataTable */}
      <DataTable />

      {/* DenseTable */}
      <DenseTable />

      {/* SortingSelectingTable */}
      <SortingSelectingTable />

      {/* CustomizationTable */}
      <CustomizationTable />
    </>
  );
}

export default withAuth(Page, ['Admin', 'Employee']);