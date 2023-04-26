"use client";
import React, { useState } from "react";
const dates = [
  "1 Day",
  "3 Days",
  "7 Days",
  "30 Days",
  "All Time",
  "Custom Date",
];
const Date = () => {
  const [selectedDate, setSelectedDate] = useState("All Time");
  return (
    <div className="mt-5 w-[95%] overflow-scroll scrollbar-hide md:w-auto md:overflow-hidden">
      <div className="flex  items-center gap-x-3">
        {dates.map((date) => (
          <div
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`py-3 px-4 w-auto whitespace-nowrap rounded-[100px] cursor-pointer ${
              selectedDate === date
                ? "bg-lightOrange_ text-darkOrange_ border-darkOrange_"
                : "bg-transparent border-[#EFF1F6]"
            } text-xs font-medium border-[1px] `}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Date;
