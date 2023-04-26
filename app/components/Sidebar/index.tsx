"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdOutlineDashboard,
  MdOutlineEdit,
  MdOutlinePeopleOutline,
  MdHourglassEmpty,
  MdOutlineAddAPhoto,
  MdDeleteOutline,
  MdOutlineSubscriptions,
  MdOutlineFilePresent,
  MdOutlineAlarmOn,
  MdOutlineMoreHoriz,
} from "react-icons/md";
import { COLORS } from "../constants";
type SideData = {
  id: string;
  title: string;
  route: string;
}[];

type Iprops = {
  item: {
    id: string;
    title: string;
    route: string;
  };
  selectedSide: string;
  setSelectedSide: React.Dispatch<React.SetStateAction<string>>;
};

const sideData: SideData = [
  { id: "side_0", title: "Dashboard", route: "" },
  { id: "side_1", title: "Item 1", route: "" },
  { id: "side_2", title: "Item 2", route: "" },
  { id: "side_3", title: "Item 3", route: "" },
  { id: "side_4", title: "Item 4", route: "" },
  { id: "side_5", title: "Item 5", route: "" },
  { id: "side_6", title: "Item 6", route: "" },
  { id: "side_7", title: "Item 7", route: "" },
  { id: "side_8", title: "Item 8", route: "" },
];
const Row = ({ item, selectedSide, setSelectedSide }: Iprops) => {
  return (
    <>
      <div
        onClick={() => setSelectedSide(item.id)}
        className="mb-5 cursor-pointer flex items-center gap-x-3"
      >
        {item.id === "side_0" ? (
          <MdOutlineDashboard
            color={selectedSide === item.id ? COLORS.darkOrange_ : ""}
          />
        ) : item.id === "side_1" ? (
          <MdOutlineEdit
            color={selectedSide === item.id ? COLORS.darkOrange_ : ""}
          />
        ) : item.id === "side_2" ? (
          <MdOutlinePeopleOutline
            color={selectedSide === item.id ? COLORS.darkOrange_ : ""}
          />
        ) : item.id === "side_3" ? (
          <MdHourglassEmpty
            color={selectedSide === item.id ? COLORS.darkOrange_ : ""}
          />
        ) : item.id === "side_4" ? (
          <MdOutlineAddAPhoto
            color={selectedSide === item.id ? COLORS.darkOrange_ : ""}
          />
        ) : item.id === "side_5" ? (
          <MdDeleteOutline
            color={selectedSide === item.id ? COLORS.darkOrange_ : ""}
          />
        ) : item.id === "side_6" ? (
          <MdOutlineSubscriptions
            color={selectedSide === item.id ? COLORS.darkOrange_ : ""}
          />
        ) : item.id === "side_7" ? (
          <MdOutlineFilePresent
            color={selectedSide === item.id ? COLORS.darkOrange_ : ""}
          />
        ) : (
          <MdOutlineAlarmOn
            color={selectedSide === item.id ? COLORS.darkOrange_ : ""}
          />
        )}
        <p
          className={`${
            selectedSide === item.id
              ? "text-darkOrange_ font-medium"
              : "text-lightText_"
          }`}
        >
          {item.title}
        </p>
      </div>
      {item.id === "side_3" && (
        <p className="text-xs mb-4 mt-8 text-lightText_">OTHERS 1</p>
      )}
      {item.id === "side_5" && (
        <p className="text-xs mb-4 mt-8 text-lightText_">OTHERS 2</p>
      )}
    </>
  );
};

const SideBar = () => {
  const [selectedSide, setSelectedSide] = useState("side_0");
  return (
    <aside className="w-[21%] min-w-[250px] hidden md:block h-screen pt-[32px]  border-r-[1px]">
      <Image
        src="/mainstack-logo.svg"
        alt="Mainstack Logo"
        className="ml-[18%]"
        width={40}
        height={40}
        priority
      />
      <div className="mt-10 ml-[20%]">
        {sideData.map((item) => (
          <Row
            key={item.id}
            item={item}
            selectedSide={selectedSide}
            setSelectedSide={setSelectedSide}
          />
        ))}
      </div>

      {/* ========== User Profile ========= */}
      <div className="mt-[16%] ml-[20%] flex items-center justify-between pr-4">
        <div className=" flex items-center space-x-2">
          <div className="overflow-hidden text[15px] text-lightText_ h-8 w-8 rounded-full">
            <Image
              src="/person.svg"
              alt="User Picture"
              className="object-cover"
              width={32}
              height={32}
            />
          </div>
          <p>Blessing Daniels</p>
        </div>
        <MdOutlineMoreHoriz />
      </div>
    </aside>
  );
};

export default SideBar;
