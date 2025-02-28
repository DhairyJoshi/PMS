"use client";

import React, { useEffect, useState } from "react";
import styles from "@/components/Pages/Profile/ImpressionGoalConversions/ImpressionShare.module.css";

const ImpressionShare = () => {
  const [Chart, setChart] = useState();
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const [series] = useState([45]);
  const [options] = useState({
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -110,
        endAngle: 110,
        track: {
          background: "#e7e7e7",
          strokeWidth: "90%",
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 1,
            fontSize: "15px",
            fontWeight: "600",
            color: "#5B5B98",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      colors: ["#00B69B"],
    },
    labels: ["Average Results"],
  });

  return (
    <div className={styles.chartBox}>
      {Chart && (
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={100}
        />
      )}
      <h3>Impression Share</h3>
    </div>
  );
};

export default ImpressionShare;
