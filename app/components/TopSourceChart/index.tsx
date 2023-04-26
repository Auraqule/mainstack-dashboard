"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { COLORS } from "../constants";
ChartJS.register(ArcElement, Tooltip, Legend);

type TopSources = {
  top_sources: {
    source: string;
    count: number;
    percent: number;
  }[];
};
const TopSourceChart = ({ top_sources }: TopSources) => {
  const data_ = top_sources.map((source) => source.count);

  const data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Referral",
        data: data_,
        backgroundColor: [
          COLORS.blue_,
          COLORS.purple_,
          COLORS.green_,
          COLORS.yellow_,
          //   COLORS.brown_,
        ],
        borderColor: [
          COLORS.blue_,
          COLORS.purple_,
          COLORS.green_,
          COLORS.yellow_,
          //   COLORS.brown_,
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default TopSourceChart;
