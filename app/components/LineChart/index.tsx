"use client";
import React from "react";

type Iprops = {
  views: {
    [date: string]: number;
  };
};
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { COLORS } from "../constants";
import { formatDate } from "@/utils";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    // title: {
    //   display: true,
    //   text: "Your Business Line Chart",
    // },
  },
};

const LineChart = ({ views }: Iprops) => {
  const data_ = Object.values(views);
  const formattedViews: any = {};
  for (const key in views) {
    formattedViews[formatDate(key)] = views[key];
  }
  const labels = Object.keys(formattedViews);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Views",
        data: data_,
        borderColor: COLORS.darkOrange_,
        backgroundColor: COLORS.lightOrange_,
      },
    ],
  };
  return <Line className="h-[47vh]" options={options} data={data} />;
};

export default LineChart;
