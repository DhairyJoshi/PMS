"use client";

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Features from "@/components/Dashboard/ProjectManagement/Features";
import TaskDistribution from "@/components/Dashboard/ProjectManagement/TaskDistribution";
import MyTasks from "@/components/Dashboard/ProjectManagement/MyTasks";
import TotalUsers from "@/components/Dashboard/ProjectManagement/TotalUsers";
import CompletedTasks from "@/components/Dashboard/ProjectManagement/CompletedTasks";
import TasksPerformance from "@/components/Dashboard/ProjectManagement/TasksPerformance";
import IssuesSummary from "@/components/Dashboard/ProjectManagement/IssuesSummary";
import AllProjects from "@/components/Dashboard/ProjectManagement/AllProjects";
import ActivityTimeline from "@/components/Dashboard/ProjectManagement/ActivityTimeline";
import PageTitle from "@/components/Common/PageTitle";
import ProjectsOverview from "@/components/Dashboard/ProjectManagement/ProjectsOverview";
import TeamMembersList from "@/components/Dashboard/ProjectManagement/TeamMembersList";
import withAuth from "@/components/Common/withAuth";

const PageComponent = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // const role = localStorage.getItem("userRole");
    // setUserRole(role);\
    setUserRole('Employee')
  }, []);

  return (
    <>
      <PageTitle
        pageTitle="Project Management"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      { userRole === "Admin" && <ProjectsOverview />}

      { userRole === "Admin" && <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

        <Grid item xs={12} sm={6} md={6} lg={8}>
          <TeamMembersList />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <ActivityTimeline />
        </Grid>
      </Grid> }

      <Features />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={6}>
          <TaskDistribution />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          <MyTasks />
        </Grid>
      </Grid>

      { userRole === "Employee" && <ActivityTimeline /> }

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={4}>
          <TotalUsers />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          <CompletedTasks />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          <TasksPerformance />
        </Grid>
      </Grid>

      { userRole === 'Admin' && 
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <IssuesSummary />

          <AllProjects />
        </Grid>
      </Grid> }

    </>
  );
}

export default withAuth(PageComponent, ['Admin', 'Employee']);