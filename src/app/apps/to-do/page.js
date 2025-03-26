"use client";

import React from "react";
import PageTitle from "@/components/Common/PageTitle";
import ToDoLists from "@/components/Apps/ToDoLists";

const Page = () => {
  return (
    <>
      <PageTitle pageTitle="To Do" dashboardUrl="/" dashboardText="Dashboard" />

      <ToDoLists />
    </>
  );
}

export default Page;