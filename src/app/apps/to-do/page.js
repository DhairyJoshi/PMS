"use client";

import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import ToDoLists from "@/components/Apps/ToDoLists";
import withAuth from "@/components/Common/withAuth";

const Page = () => {
  return (
    <>
      <PageTitle pageTitle="To Do" dashboardUrl="/" dashboardText="Dashboard" />

      <ToDoLists />
    </>
  );
}

export default withAuth(Page, ['Admin', 'Employee'])