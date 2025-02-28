"use client";

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

const ProjectsOverview = () => {
  const [Chart, setChart] = useState();
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);
  
  const series = [
    {
      name: "Proj1",
      data: [44, 55, 57, 56, 61, 58, 63, null, null, null, null, null],
    },
    {
      name: "Proj2",
      data: [76, 85, 101, 98, 87, 105, 91, 114, null, null, null, null],
    },
    {
      name: "Proj3",
      data: [null, null, null, 30, 30, 48, 52, 53, 41, 55, 45, 60],
    },
    {
      name: "Proj4",
      data: [null, null, null, null, null, 48, 52, 53, 41, 55, 45, 60],
    },
    {
      name: "Proj5",
      data: [null, null, null, null, null, null, null, 53, 41, 55, 45, 60],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
        borderRadius: "4",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    colors: ["#757FEF", "#2DB6F5", "#EE368C", "#00B69B", "#FFBC2B"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#A9A9C8",
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#A9A9C8",
          fontSize: "14px",
        },
      },
      axisBorder: {
        show: false,
        colors: "#f6f6f7",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " Tasks";
        },
      },
    },
    legend: {
      fontSize: 15,
      offsetY: 12,
      position: "top",
      horizontalAlign: "right",
    },
    grid: {
      show: true,
      borderColor: "#f6f6f7",
    },
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 25px 15px",
          mb: "15px",
        }}
      >
        <Typography
          as="h1"
          sx={{
            fontSize: 24,
            fontWeight: 500,
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
          }}
          className="for-dark-bottom-border"
        >
          Projects Overview
        </Typography>

        {Chart && (
          <Chart options={options} series={series} type="bar" height={380} />
        )}
      </Card>
    </>
  );
};

export default ProjectsOverview;