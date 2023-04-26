"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { COLORS } from "../constants";
ChartJS.register(ArcElement, Tooltip, Legend);

type TopLocation = {
  top_locations: {
    country: string;
    count: number;
    percent: number;
  }[];
};
const TopLocationChart = ({ top_locations }: TopLocation) => {
  const data_ = top_locations.map((location) => location.count);
  const data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Views",
        data: data_,
        backgroundColor: [
          COLORS.blue_,
          COLORS.purple_,
          COLORS.green_,
          COLORS.yellow_,
          COLORS.brown_,
        ],
        borderColor: [
          COLORS.blue_,
          COLORS.purple_,
          COLORS.green_,
          COLORS.yellow_,
          COLORS.brown_,
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default TopLocationChart;
